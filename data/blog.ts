export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: 'backend' | 'architecture' | 'devops' | 'ai';
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'multi-tenant-architecture-laravel',
    title: 'Multi-Tenant Architecture: Lessons from Building Enterprise SaaS',
    summary: 'A deep dive into database-per-tenant vs. single-database tenancy models in Laravel, based on real-world enterprise deployments.',
    category: 'architecture',
    publishDate: 'July 15, 2026',
    readTime: '8 min read',
    author: {
      name: 'Kamal Sroor',
      avatar: '/images/avatar.jpg'
    },
    content: `
Multi-tenancy is an architectural pattern where a single instance of a software application serves multiple customers (tenants). When building enterprise SaaS, data segregation, security, and scalability are critical.

In this article, I will share the engineering decisions and trade-offs made during the implementation of a multi-tenant platform in Laravel, comparing the **Database-per-Tenant** vs. **Single-Database (Shared table)** tenancy models.

## 1. The Multi-Tenancy Models

### A. Database-per-Tenant (Isolated Approach)
In this model, each tenant has their own separate database.

* **Pros:** Maximum security, complete data isolation, easy backups per tenant, custom schema upgrades possible.
* **Cons:** Higher resource usage, complex database migrations (running migrations across 100+ databases), harder to aggregate global statistics.

### B. Single-Database with Tenant ID (Shared Approach)
All tenants share the same database. Rows are segregated using a \`tenant_id\` column.

* **Pros:** Easier maintenance, low infrastructure cost, simple global analytics.
* **Cons:** Risk of cross-tenant data leakage if queries miss the tenant scope, backups of a single tenant are difficult to restore.

---

## 2. Our Solution: Database-per-Tenant in Laravel

For the Enterprise SaaS platform, we chose the **Database-per-Tenant** strategy to guarantee strict data segregation for medical and financial compliance.

Here is the simplified backend flow we implemented for dynamic connection switching:

\`\`\`php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Support\\Facades\\DB;
use App\\Models\\Tenant;

class SwitchTenantDatabase
{
    public function handle($request, Closure $next)
    {
        $host = $request->getHost();
        $tenant = Tenant::where('domain', $host)->firstOrFail();

        // Switch connection dynamically
        config(['database.connections.tenant.database' => $tenant->db_name]);
        DB::purge('tenant');
        DB::reconnect('tenant');

        return $next($request);
    }
}
\`\`\`

## 3. Managing Dynamic Database Migrations

With 50+ databases, running \`php artisan migrate\` directly would cause timeouts. We implemented an asynchronous console command that executes migrations sequentially or in parallel workers using Redis Queues.

\`\`\`php
Tenant::all()->each(function ($tenant) {
    MigrateTenantJob::dispatch($tenant);
});
\`\`\`

This approach ensured zero application downtime during schema migrations and allowed us to scale the system comfortably.
    `
  },
  {
    slug: 'zero-downtime-postgres-migration',
    title: 'Zero-Downtime PostgreSQL Migration at Scale',
    summary: 'How to migrate a multi-terabyte database under tight downtime requirements using replication, schema split, and staging verification.',
    category: 'devops',
    publishDate: 'June 20, 2026',
    readTime: '10 min read',
    author: {
      name: 'Kamal Sroor',
      avatar: '/images/avatar.jpg'
    },
    content: `
Migrating databases is like changing a jet engine mid-flight. When the database size exceeds 2TB and the system requires 24/7 availability, traditional methods like simple \`pg_dump\` and restore are not viable.

Here is the exact strategy I orchestrated to achieve a database migration with less than 15 minutes of downtime.

## The Challenge
* **Database Size:** 2.4 TB
* **Engine version:** Upgrade from PostgreSQL 12 to 15.
* **Max Allowed Downtime:** 30 minutes.

## The Strategy: Blue-Green Replication

Instead of doing an offline migration, we used PostgreSQL's built-in **Logical Replication** to sync the data in real-time between the old server (Blue) and the new optimized server (Green).

### Step 1: Pre-Migration Schema Alignment
First, we exported the database schema without the data and loaded it on the new server:
\`\`\`bash
pg_dump -U postgres -d production_db --schema-only -F c -f schema.dump
\`\`\`

### Step 2: Establish Logical Replication
We created a Publication on the old server and a Subscription on the new server:
\`\`\`sql
-- On Old Server (Source)
CREATE PUBLICATION prod_pub FOR ALL TABLES;

-- On New Server (Target)
CREATE SUBSCRIPTION prod_sub CONNECTION 'host=old-db-ip dbname=production_db user=replicator' PUBLICATION prod_pub;
\`\`\`

Postgres will automatically perform the initial copy and keep the servers synced in real-time.

### Step 3: The Switchover (Cutover)
Once replication lag dropped to zero, we put the application in read-only mode, completed the final sequence sync, updated the application DNS to point to the Green database, and re-enabled writing.

Total application write downtime: **12 minutes and 42 seconds**.
    `
  },
  {
    slug: 'fastapi-vs-laravel-backend-2026',
    title: 'FastAPI vs Laravel: Choosing the Right Tool in 2026',
    summary: 'A balanced comparison between Laravel and FastAPI based on execution speed, developer experience, and integration with modern AI technologies.',
    category: 'backend',
    publishDate: 'May 05, 2026',
    readTime: '6 min read',
    author: {
      name: 'Kamal Sroor',
      avatar: '/images/avatar.jpg'
    },
    content: `
In 2026, the backend landscape is heavily influenced by the rise of AI Agents and rapid data processing. As a senior engineer with extensive experience in both **PHP/Laravel** and **Python/FastAPI**, I often get asked: *which one should we choose for a new project?*

Here is the objective breakdown.

## 🚀 Execution Speed & Asynchronous Processing

* **FastAPI:** Built on ASGI, ASGI uses Python's \`asyncio\` library. It is extremely fast and handles thousands of concurrent requests easily. Excellent for high-scale, I/O bound applications (like streaming, WebSockets, or AI model endpoints).
* **Laravel:** Traditionally synchronous (WSGI-like), but can be optimized using Octane (using Swoole or RoadRunner) to run in-memory. However, write-intensive tasks are still more resource-heavy compared to FastAPI.

## 🛠️ Ecosystem & Out-of-the-Box Features

* **Laravel:** The king of developer velocity. It comes with built-in authentication, ORM (Eloquent), queues, mailers, and notifications. For SaaS platforms, Laravel reduces development time by 50%.
* **FastAPI:** A micro-framework. It gives you raw speed, automatic OpenAPI/Swagger generation, and type safety with Pydantic. However, you must construct the database layer (SQLAlchemy/SQLModel) and auth system manually.

## 🤖 AI and Machine Learning Integration

Python is the undisputed language of AI.
If your backend requires orchestrating **AI agents (LangChain, LlamaIndex)**, processing high-volume vector searches (Pinecone/Milvus), or training models, **FastAPI** is the natural choice as it avoids any language-bridging overhead.

## Verdict
* Choose **Laravel** if you are building an enterprise business portal, SaaS, or complex dashboard where time-to-market and admin tooling are key.
* Choose **FastAPI** if you are building AI-powered microservices, high-traffic data APIs, or real-time event-driven backends.
    `
  }
];
