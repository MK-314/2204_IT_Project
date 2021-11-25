class FetchApi {
    static getAllUsers() {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users', {
                    method: 'GET',
                    headers: {}
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static createUser(thisObject) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users', {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(thisObject)
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getUserByEmail(email) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/users' +
                    "?thisaction=getByEmail&email=" + email, {
                        method: "GET",
                        headers: {},
                    })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static updateUser(id, thisObject) {
            return new Promise(async(res, rej) => {
                fetch("https://recipe-ruby-api.herokuapp.com/api/users/" + id, {
                        "method": "PUT",
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        "body": JSON.stringify(thisObject)
                    })
                    .then(response => response.json())
                    .then(data => {
                        res(data)
                    })
                    .catch(err => {
                        rej(err)
                    })
            })
        }
        // POSTS
    static getAllPosts() {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/posts", {
                    "method": "GET",
                    "headers": {}
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getPostByID(post_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/posts/" + post_id, {
                    "method": "GET",
                    "headers": {}
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static createPost(postObject) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/posts", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(postObject)
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getPostByUserId(user_id) {
        return new Promise(async(res, rej) => {
            fetch('https://recipe-ruby-api.herokuapp.com/api/posts' +
                    '?thisaction=getByUserId&user_id=' + user_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static countPostsByUserId(user_id) {
            return new Promise(async(res, rej) => {
                fetch("https://recipe-ruby-api.herokuapp.com/api/posts" +
                        "?thisaction=countPostsByUserId&user_id=" + user_id, {
                            "method": "GET",
                            "headers": {}
                        })
                    .then(response => response.json())
                    .then(data => {
                        res(data.postNumber)
                    })
                    .catch(err => {
                        rej(err)
                    })
            })
        }
        // FAVS
    static countFavsByUserId(user_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites" +
                    "?thisaction=countFavsByUserId&user_id=" + user_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data.postNumber)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static countFavsByPostId(post_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites" +
                    "?thisaction=countFavsByPostId&post_id=" + post_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data.postNumber)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getFavsByUserId(user_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites" +
                    "?thisaction=getFavsByUserId&user_id=" + user_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getFavsByPostId(post_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites" +
                    "?thisaction=getFavsByPostId&post_id=" + post_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static createFavRecord(favObject) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(favObject)
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static getByUserIdAndPostId(user_id, post_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites" +
                    "?thisaction=getByUserIdAndPostId&user_id=" + user_id + "&post_id=" + post_id, {
                        "method": "GET",
                        "headers": {}
                    })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
    static deleteFavRecord(record_id) {
        return new Promise(async(res, rej) => {
            fetch("https://recipe-ruby-api.herokuapp.com/api/favorites/" + record_id, {
                    "method": "DELETE",
                    "headers": {}
                })
                .then(response => response.json())
                .then(data => {
                    res(data)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
}
export { FetchApi }