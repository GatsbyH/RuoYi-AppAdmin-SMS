import request from '@/utils/request'

// 查询用户列表
export function listUsers(query) {
  return request({
    url: '/android/users/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUsers(id) {
  return request({
    url: '/android/users/' + id,
    method: 'get'
  })
}

// 新增用户
export function addUsers(data) {
  return request({
    url: '/android/users',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUsers(data) {
  return request({
    url: '/android/users',
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUsers(id) {
  return request({
    url: '/android/users/' + id,
    method: 'delete'
  })
}
