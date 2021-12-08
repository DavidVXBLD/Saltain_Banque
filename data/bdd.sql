CREATE DATABASE Saltain_Banque CHARACTER SET 'utf8';
USE Saltain_Banque;

CREATE TABLE [IF NOT EXISTS] user (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR,
    last_name VARCHAR,
    adress VARCHAR,
    birth_date DATE,
    advisor VARCHAR,
    phone_number VARCHAR,
)

CREATE TABLE [IF NOT EXISTS] account (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    account_number INT,
    account_type VARCHAR,
    creation_date DATE,
    account_mail VARCHAR,
    account_password VARCHAR,
)

CREATE TABLE [IF NOT EXISTS] last_op (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    transaction_type VARCHAR,
    op_description VARCHAR,
    op_date DATE,
    amount FLOAT,
)
