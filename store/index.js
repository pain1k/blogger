import axios from 'axios'
import Cookie from 'js-cookie'

export let state = () => ({
  postsLoaded: [],
  token : null
})

export const mutations = {
  setPost(state,posts) {
    state.postsLoaded = posts
    console.log(posts)
  },
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  editPost(state,postEdit){
    const postIndex=state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  addComment(state,comment){
    console.log(comment)
    state.commentsLoaded.push(comment)
  },
  setToken(state,token){
    console.log(token)
    state.token = token
  },
  destroyToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({commit},context){
    return axios.get('https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .then(res => {
        console.log(res)
        const postsArray=[]
        for(let key in res.data){
          postsArray.push({...res.data[key], id:key})
        }
        commit('setPost', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser({commit},authData){
    const key = 'AIzaSyB0f_eL8eloVAfBRLN6PpR5Ua62_OoI_vo'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,{
      email : authData.email,
      password : authData.password,
      returnSecureToken : true
    })
      .then(res => {
        let token = res.data.idToken
        commit('setToken', token)
        localStorage.setItem('token',token)
        Cookie.set('jwt',token)
      })
      .catch(e => console.log(e))
  },
  initAuth({commit},req) {
    let token
    if (req) {
      if (!req.headers.cookie) return false
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(t => t.trim().startsWith('jwt='))
      if (!jwtCookie) return false
      token = jwtCookie.split('=')[1]
    } else {
      token = localStorage.getItem('token')
      if (!token) return false;
    }
    commit('setToken',token)
  },
  logoutUser({commit}) {
    commit('destroyToken')
    localStorage.removeItem('token')
    Cookie.remove('jwt')
  },
  addPost({commit}, post){
    return axios.post('https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts.json',post)
      .then(res => {
        commit('addPost', {...post,id:res.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit, state},post){
    return axios.put(`https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost',post)
      })
      .catch(e => console.log(e))
  },
  addComment({commit},comment){
    return axios.post('https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/comments.json',comment)
      .then(res => {
        commit('addComment', {...comment,id:res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state){
    return state.postsLoaded
  },
  checkAuthUser(state){
    return state.token != null
  }
}
