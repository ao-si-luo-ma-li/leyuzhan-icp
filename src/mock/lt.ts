let OriginProducts = [
  
]

export const AllProducts = OriginProducts.map((item, index) => ({...item, id: index}))

export type DetailModel = typeof AllProducts[0]