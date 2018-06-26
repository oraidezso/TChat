CREATE TABLE chat (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userid INT NOT NULL,
    name VARCHAR(50),
    roomid INT NOT NULL,
    modtime TIMESTAMP,
    lang char(2) NOT NULL,
    mes TEXT
);
insert into chat (userid,name,roomid,lang,mes) values(1,"Dezső",1,"en","This is magic.");
