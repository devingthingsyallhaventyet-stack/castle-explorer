-- Castlecore D1 Schema
-- Based on castlecore-schema.md

-- ============================================
-- LISTINGS (core table)
-- ============================================
CREATE TABLE IF NOT EXISTS listings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  type TEXT NOT NULL DEFAULT 'Castle',
  century TEXT,

  -- Location
  country TEXT NOT NULL,
  region TEXT NOT NULL,
  town TEXT,
  county TEXT,
  latitude REAL,
  longitude REAL,

  -- Classification
  status TEXT CHECK(status IN ('Open to Visitors', 'Freely Accessible', 'Book to Experience', 'Private')) DEFAULT NULL,
  condition TEXT CHECK(condition IN ('Intact', 'Ruin')) DEFAULT NULL,

  -- Google Places
  google_place_id TEXT,
  google_rating REAL,
  google_review_count INTEGER,

  -- About
  description_short TEXT,
  description_expanded TEXT,

  -- Architecture
  architecture TEXT,

  -- Terrain & Accessibility
  terrain_description TEXT,
  terrain_tags TEXT,  -- JSON array e.g. ["Steep Approach","Cobblestones","Wheelchair Access"]

  -- Getting There
  getting_there_car TEXT,
  getting_there_train TEXT,
  getting_there_bus TEXT,
  getting_there_airport TEXT,

  -- State
  published INTEGER NOT NULL DEFAULT 0,
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ============================================
-- TIMELINE ENTRIES
-- ============================================
CREATE TABLE IF NOT EXISTS timeline_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  date_label TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  image_attribution TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ============================================
-- PEOPLE
-- ============================================
CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  dates TEXT,
  role_description TEXT,
  portrait_url TEXT,
  wikipedia_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- ============================================
-- DESIGNATIONS
-- ============================================
CREATE TABLE IF NOT EXISTS designations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body_name TEXT,
  url TEXT
);

-- ============================================
-- LINKS & SOURCES
-- ============================================
CREATE TABLE IF NOT EXISTS links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK(type IN ('official', 'wikipedia', 'heritage', 'google_places', 'other')),
  url TEXT NOT NULL,
  label TEXT
);

-- ============================================
-- PHOTOS (our own uploads)
-- ============================================
CREATE TABLE IF NOT EXISTS photos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  r2_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  is_hero INTEGER NOT NULL DEFAULT 0,
  alt_text TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  uploaded_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ============================================
-- VIDEOS
-- ============================================
CREATE TABLE IF NOT EXISTS videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  youtube_id TEXT NOT NULL,
  title TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- ============================================
-- FURTHER READING
-- ============================================
CREATE TABLE IF NOT EXISTS further_reading (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  author TEXT,
  title TEXT NOT NULL,
  year TEXT,
  url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- ============================================
-- GUEST BOOK ENTRIES
-- ============================================
CREATE TABLE IF NOT EXISTS guestbook_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_id TEXT,
  category TEXT NOT NULL CHECK(category IN ('visit', 'knowledge', 'recommendations', 'family', 'folklore')),
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected', 'flagged')),
  likes INTEGER NOT NULL DEFAULT 0,
  submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT
);

-- ============================================
-- IMPROVEMENTS (user submissions)
-- ============================================
CREATE TABLE IF NOT EXISTS improvements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK(type IN ('photo', 'tip', 'issue')),
  author_name TEXT NOT NULL,
  author_id TEXT,
  body TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
  submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT
);

-- ============================================
-- PIPELINE (new listing candidates)
-- ============================================
CREATE TABLE IF NOT EXISTS pipeline (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  country TEXT,
  region TEXT,
  type TEXT DEFAULT 'Castle',
  stage TEXT NOT NULL DEFAULT 'submitted' CHECK(stage IN ('submitted', 'researching', 'review', 'approved', 'rejected')),
  source TEXT,
  notes TEXT,
  wikipedia_url TEXT,
  google_place_id TEXT,
  heritage_url TEXT,
  submitted_by TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_listings_country ON listings(country);
CREATE INDEX IF NOT EXISTS idx_listings_published ON listings(published);
CREATE INDEX IF NOT EXISTS idx_listings_slug ON listings(slug);
CREATE INDEX IF NOT EXISTS idx_timeline_listing ON timeline_entries(listing_id);
CREATE INDEX IF NOT EXISTS idx_people_listing ON people(listing_id);
CREATE INDEX IF NOT EXISTS idx_photos_listing ON photos(listing_id);
CREATE INDEX IF NOT EXISTS idx_guestbook_listing ON guestbook_entries(listing_id);
CREATE INDEX IF NOT EXISTS idx_guestbook_status ON guestbook_entries(status);
CREATE INDEX IF NOT EXISTS idx_improvements_status ON improvements(status);
CREATE INDEX IF NOT EXISTS idx_pipeline_stage ON pipeline(stage);
CREATE INDEX IF NOT EXISTS idx_videos_listing ON videos(listing_id);
CREATE INDEX IF NOT EXISTS idx_further_reading_listing ON further_reading(listing_id);
