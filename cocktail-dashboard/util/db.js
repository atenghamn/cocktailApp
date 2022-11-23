import * as SQLite from 'expo-sqlite'
import Cocktail from "../entities/Cocktail";

const db = SQLite.openDatabase('cocktails.db');

export const initDB = () => {
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS cocktail(
                    id INTEGER PRIMARY KEY,
                    title TEXT NOT NULL,
                glass TEXT NOT NULL,
                instructions TEXT,
                ingredient1 TEXT NOT NULL ,
                ingredient2 TEXT,
                ingredient3 TEXT,
                ingredient4 TEXT,
                ingredient5 TEXT,
                ingredient6 TEXT,
                ingredient7 TEXT,
                ingredient8 TEXT,
                ingredient9 TEXT,
                ingredient10 TEXT,
                measure1 TEXT NOT NULL,
                measure2 TEXT,
                measure3 TEXT,
                measure4 TEXT,
                measure5 TEXT,
                measure6 TEXT,
                measure7 TEXT,
                measure8 TEXT,
                measure9 TEXT,
                measure10 TEXT
                )`, [],
                (_, res) => resolve(res),
                (_, err) => reject(err)
            )
        })
    })
}

export const getTableInfo = () => {
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql(
                `pragma table_info('cocktail')`, [],
                (_, res) => resolve(res),
                (_, err) => reject(err)
            )
        })
    })
}

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `SELECT * FROM cocktail`, [],

                (_, res) => resolve(res.rows._array.map(row => new Cocktail(
                    row.id, row.title, row.glass, row.instructions, row.ingredient1, row.ingredient2, row.ingredient3,
                row.ingredient4, row.ingredient5, row.ingredient6, row.ingredient7, row.ingredient8, row.ingredient9, row.ingredient10,
                row.measure1, row.measure2, row.measure3, row.measure4, row.measure5, row.measure6, row.measure7, row.measure8, row.measure9, row.measure10))),
                (_, err) => reject(err)
            )
        })
    })
}

export const insert = (cocktail) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO cocktail (title,
                                            glass,
                                         instructions,
                                         ingredient1,
                                         ingredient2,
                                         ingredient3,
                                         ingredient4,
                                         ingredient5,
                                         ingredient6,
                                         ingredient7,
                                         ingredient8,
                                         ingredient9,
                                         ingredient1,
                                         measure1,
                                         measure2,
                                         measure3,
                                         measure4,
                                         measure5,
                                         measure6,
                                         measure7,
                                         measure8,
                                         measure9,
                                         measure10)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
                            , [cocktail.title,
                                         cocktail.glass,
                                         cocktail.instructions,
                                         cocktail.ingredient1,
                                         cocktail.ingredient2,
                                         cocktail.ingredient3,
                                         cocktail.ingredient4,
                                         cocktail.ingredient5,
                                         cocktail.ingredient6,
                                         cocktail.ingredient7,
                                         cocktail.ingredient8,
                                         cocktail.ingredient9,
                                         cocktail.ingredient1,
                                         cocktail.measure1,
                                         cocktail.measure2,
                                         cocktail.measure3,
                                         cocktail.measure4,
                                         cocktail.measure5,
                                         cocktail.measure6,
                                         cocktail.measure7,
                                         cocktail.measure8,
                                         cocktail.measure9,
                                         cocktail.measure10],
                    (_, res) => resolve(res), 
                    (_, err) => reject(err)
            )
        })
    })
}

export const update = (cocktail) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `UPDATE cocktail SET title = ?,
                                            glass = ?,
                                         instructions = ?,
                                         ingredient1 = ?,
                                         ingredient2 = ?,
                                         ingredient3 = ?,
                                         ingredient4 = ?,
                                         ingredient5 = ?,
                                         ingredient6 = ?,
                                         ingredient7 = ?,
                                         ingredient8 = ?,
                                         ingredient9 = ?,
                                         ingredient1 = ?,
                                         measure1 = ?,
                                         measure2 = ?,
                                         measure3 = ?,
                                         measure4 = ?,
                                         measure5 = ?,
                                         measure6 = ?,
                                         measure7 = ?,
                                         measure8 = ?,
                                         measure9 = ?,
                                         measure10 = ?`
                , [cocktail.title,
                    cocktail.glass,
                    cocktail.instructions,
                    cocktail.ingredient1,
                    cocktail.ingredient2,
                    cocktail.ingredient3,
                    cocktail.ingredient4,
                    cocktail.ingredient5,
                    cocktail.ingredient6,
                    cocktail.ingredient7,
                    cocktail.ingredient8,
                    cocktail.ingredient9,
                    cocktail.ingredient1,
                    cocktail.measure1,
                    cocktail.measure2,
                    cocktail.measure3,
                    cocktail.measure4,
                    cocktail.measure5,
                    cocktail.measure6,
                    cocktail.measure7,
                    cocktail.measure8,
                    cocktail.measure9,
                    cocktail.measure10],
                (_, res) => resolve(res),
                (_, err) => reject(err)
            )
        })
    }) 
}

export const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql(
                'SELECT * FROM cocktail WHERE id = ?', [id],
                   (_, res) => resolve(res.rows._array.map(row => new Cocktail(
                    row.id, row.title, row.glass, row.instructions, row.ingredient1, row.ingredient2, row.ingredient3,
                row.ingredient4, row.ingredient5, row.ingredient6, row.ingredient7, row.ingredient8, row.ingredient9, row.ingredient10,
                row.measure1, row.measure2, row.measure3, row.measure4, row.measure5, row.measure6, row.measure7, row.measure8, row.measure9, row.measure10))),
                (_, err) => reject(err)
            )
        })
    })
}


export const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql(
                'DELETE FROM cocktail WHERE id = ?', [id],
                (_, res) => resolve(res),
                (_, err) => reject(err)
            )
        })
    })
}
