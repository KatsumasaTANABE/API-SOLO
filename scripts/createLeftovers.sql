\encoding utf8
BEGIN TRANSACTION;

CREATE TABLE leftovers(
	id SERIAL PRIMARY KEY, 
	titlename text,
	genre text REFERENCES GENRES (genre),
	useleftover text 	
);

INSERT INTO leftovers(titlename, genre ,useleftover) values ('1円'       ,  '金銭'   ,  '貯金する');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('1円'       ,  '金銭'   ,  '寄付する');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('1分'       ,  '生活'   ,  '振り返りをする');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('コーヒー'  ,  '生活'   ,  '入浴剤として活用することで発刊作用アップし美肌効果');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('コーヒー'  ,  '生活'   ,  'コーヒーの油分を生かした研磨剤になる');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('コーヒー'   , '生活'   ,  '洗剤として活用');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('みかんの皮' , '食べ物' ,  '陳皮にして漢方薬として利用');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('みかんの皮' , '生活'   ,  '入浴剤として利用');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('みかんの皮' , '生活'   ,  '乾燥させ軽く火をつけることで虫よけとして利用');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('みかんの皮' , '生活'   ,  'クエン酸により油汚れや水垢の掃除として利用');
INSERT INTO leftovers(titlename, genre ,useleftover) values ('みかんの皮' , '生活'   ,  '消臭剤として利用');


COMMIT;