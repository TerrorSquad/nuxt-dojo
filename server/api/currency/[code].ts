export default defineEventHandler(async (event) => {
  const code = event.context.params?.code
  const { currencyApiKey } = useRuntimeConfig()
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`
  interface CurrencyData {
    meta: {
      last_updated_at: string
    }
    data: {
      code: {
        code: string
        value: number
      }
    }
  }
  return (await $fetch<CurrencyData>(uri)).data
})
