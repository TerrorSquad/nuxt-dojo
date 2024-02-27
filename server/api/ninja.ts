export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event)
  // handle post data
  // const { age: number } = await readBody(event)
  // api call with private key
  const uri =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_P4oCzKCVo2zLE24KNb7813ZWXP7MrTiIaMgHGWan&currencies=EUR%2CUSD%2CCAD"
  // todo: Use better type than object
  const { data } = await $fetch<{ data: object }>(uri)
  return data
})
