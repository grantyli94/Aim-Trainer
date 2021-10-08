\echo 'Delete and recreate aimly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE aimly;
CREATE DATABASE aimly;
\connect aimly

\i aimly-schema.sql
\i aimly-seed.sql

\echo 'Delete and recreate aimly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE aimly_test;
CREATE DATABASE aimly_test;
\connect aimly_test

\i aimly-schema.sql
