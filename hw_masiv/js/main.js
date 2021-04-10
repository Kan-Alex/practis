n = 1

const order = ['Шелдон', 'Леонард', 'Пенни', 'Раджеш', 'Говард']
for (let i = 0; i < n; i++) {
    order.push(order[0],order[0])
    order.shift(order[0])
}


console.log(order[0])