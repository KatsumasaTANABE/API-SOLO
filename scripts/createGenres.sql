\encoding utf8
BEGIN TRANSACTION;

CREATE TABLE genres(
    id SERIAL PRIMARY KEY,
    genre TEXT UNIQUE
);

INSERT INTO genres (genre) VALUES('金銭');
INSERT INTO genres (genre) VALUES('生活');
INSERT INTO genres (genre) VALUES('食べ物');
INSERT INTO genres (genre) VALUES('その他');

COMMIT;