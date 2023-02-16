const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vinod',
  password: 'Cel@1234',
  port: 5432,
});
const getUsers = (request, response) => {
    pool.query('SELECT * FROM userSign', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
  
// const getUserById = (request, response) => {
//     const id = request.params.name;

//     pool.query('SELECT * FROM userSign WHERE name = $1', [id], (error, results) => {
//     if (error) {
//         throw error
//     }
//     response.status(200).json(results.rows)
//     })
// }
  
const createUser = (request, response) => {
    const { firstname, email, password } = request.body
    pool.query('INSERT INTO userSign (firstname, email, password) VALUES ($1, $2, $3)', [firstname, email, password], (error, results) => {
    if (error) {
        throw error
    }
    response.status(201).send(`User added`)
    })
}
  
// const updateUser = (request, response) => {
//     const id = request.params.name;
//     const { name, author, publishedby } = request.body

//     pool.query(
//         'UPDATE userSign SET name = $1, author = $2, publishedby = $3,  WHERE name = $4',
//         [name, author, publishedby],
//         (error) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).send(`User modified with ID: ${id}`)
//         }
//     )
// }
  
const deleteUser = (request, response) => {
    const id = request.params.email

    pool.query('DELETE FROM userSign WHERE email = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`User deleted with email`)
    })
}
// this is for blog api
const getBlog = (request, response) => {
    pool.query('SELECT * FROM blog', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
  
const getBlogById = (request, response) => {
    const id = request.params.blogid;

    pool.query('SELECT * FROM blog WHERE blogid = $1', [id], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}
  
const createBlog = (request, response) => {
    const { location, photo_upload, description, sites_to_visit, userid } = request.body
    pool.query('INSERT INTO blog (location, photo_upload, description, sites_to_visit, userid) VALUES ($1, $2, $3, $4, $5)', [location, photo_upload, description, sites_to_visit, userid ], (error, results) => {
    if (error) {
        throw error
    }
    response.status(201).send(`User added`)
    })
}
  
const updateBlog = (request, response) => {
    const id = request.params.blogid;
    const { location, photo_upload, description, sites_to_visit, userid } = request.body

    pool.query(
        'UPDATE blog SET location = $1, photo_upload = $2, description = $3, sites_to_visit = $4, userid = $5  WHERE blogid = $6',
        [location, photo_upload, description, sites_to_visit, userid, id],
        (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
  
const deleteBlog = (request, response) => {
    const id = request.params.blogid

    pool.query('DELETE FROM blog WHERE blogId = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`User deleted with id`)
    })
}
  
module.exports = {
getUsers,
// getUserById,
createUser,
// updateUser,
deleteUser,
getBlog,
getBlogById,
createBlog,
updateBlog,
deleteBlog,
}