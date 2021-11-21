const urlApi = 'http://localhost:8888/'

const httpGet = async url => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    if (result.success) {
      return result
    }
    throw new Error(result.message)
  } catch (error) {
    alert(error)
  }
}

const httpPost = async (url, data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  try {
    const response = await fetch(url, options)
    const results = await response.json()
    if (results.success) {
      return results
    }
    throw new Error(results.error)
  } catch (error) {
    alert(error)
  }
}

const httpPatch = async (url, data) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  try {
    const response = await fetch(url, options)
    const results = await response.json()
    if (results.success) {
      return results
    }
    throw new Error(results.error)
  } catch (error) {
    alert(error)
  }
}

const httpDelete = async url => {
  try {
    const response = await fetch(url, { method: 'DELETE' })
    const data = await response.json()
    console.log(data)
    if (data.success) {
      return true
    }
    throw new Error(data.error)
  } catch (error) {
    alert(error)
  }
}
export { httpDelete, httpGet, httpPost, httpPatch }
export default urlApi
