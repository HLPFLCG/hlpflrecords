/**
 * Cloudflare D1 Database Client
 * Simple wrapper for D1 database operations
 */

export type D1Database = any // Cloudflare D1 type

/**
 * Helper to generate UUIDs (simple version for SQLite)
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Helper to format dates for SQLite
 */
export function formatDate(date: Date = new Date()): string {
  return date.toISOString()
}

/**
 * Execute a query and return results
 */
export async function query(db: D1Database, sql: string, params: any[] = []) {
  try {
    const result = await db.prepare(sql).bind(...params).all()
    return result.results || []
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

/**
 * Execute a query and return first result
 */
export async function queryOne(db: D1Database, sql: string, params: any[] = []) {
  try {
    const result = await db.prepare(sql).bind(...params).first()
    return result || null
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

/**
 * Execute a query (INSERT, UPDATE, DELETE)
 */
export async function execute(db: D1Database, sql: string, params: any[] = []) {
  try {
    const result = await db.prepare(sql).bind(...params).run()
    return result
  } catch (error) {
    console.error('Database execute error:', error)
    throw error
  }
}

/**
 * Execute multiple queries in a batch
 */
export async function batch(db: D1Database, statements: Array<{ sql: string; params: any[] }>) {
  try {
    const prepared = statements.map(({ sql, params }) =>
      db.prepare(sql).bind(...params)
    )
    const results = await db.batch(prepared)
    return results
  } catch (error) {
    console.error('Database batch error:', error)
    throw error
  }
}
