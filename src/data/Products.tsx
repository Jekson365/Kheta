import axios from 'axios'

export type Product = {
    title: String,
    price: number,
    id: Number,
    image: String | null,
    desc: String,
    category: String,
}
export const Products: Product[] = await axios.get("http://localhost:8080/products/getall").then((res) => res.data)


// stand clock other

// export const Products: Product[] = [
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 1,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/308606869_158549750137202_316232749334461551_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bRTpucTX53AAX_-Y7qn&_nc_ht=scontent.fkut1-1.fna&oh=00_AfA2dtKjP5RMoi6WDkjIhFWjMjt0U4y2HY-aFIrKXDDH2A&oe=648998E5",
//         category: "stand"
//     },
//     {
//         title: "საათი",
//         price: 25,
//         id: 2,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/312994026_164990866159757_6202450786320086834_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ka4jt2gjBpgAX8kHrc2&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBjjKVg_haGOHC4FkX8pIs8Ot_CBLRnm5gYxjFC7ldOaQ&oe=648A6FDA",
//         category: "clock"
//     },
//     {
//         title: "ცხენი",
//         price: 25,
//         id: 3,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306080125_155775507081293_2498169837097372532_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=58lR5q5ljTwAX_7rNfD&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBFYTGUCU5qQZkHYXCa3VJ5puy46jyN5VU7PMfJe1wSVQ&oe=648A80E2",
//         category: "other"
//     },
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 4,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/316415296_177843838232590_7207661610235231767_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EkJ1AXxYslwAX-bMH4s&_nc_ht=scontent.fkut1-1.fna&oh=00_AfB1ViXyV3PMckZrpxW1oKDuagw9Y0nDEWPwYQkfaeWfyA&oe=6489B8C4",
//         category: "stand"
//     },
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 5,
//         image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/314347222_173979608619013_8918491194610096227_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sjo-MAc7whgAX8EfK4m&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfBjQZy_OJIUGay-uvHVQ_ytowxFb62iIKd3O-SvFKPVVA&oe=648B0A8C",
//         category: "stand"
//     },
//     {
//         title: "საათი",
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/313120364_164990962826414_2657769691278291502_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7WfZ-ZRLPMAAX8uyd0z&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCD0tu-Zoa5Ydp3QT5ZXYu6v2DFDWfn47utT8WKg-SGFA&oe=648A02A8",
//         price: 25,
//         id: 6,
//         category: "stand"
//     },
//     {
//         title: "ცხსენი",
//         price: 25,
//         id: 7,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306124254_155775357081308_6428750173462444642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=zNZO0gKGpngAX9-dQ6b&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCLmZzHCcabF7xnbglcKoJEY0G2b5qUQwtj1TYCwbf0_g&oe=6488CA93",
//         category: "other"
//     },
//     {
//         title: "საათი",
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/340551336_967870177959054_1970464021400864335_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=CHnps_lbabEAX8-fO1s&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBWCa2UNgXkViJMY0rChyeBRalBLjKWaNhlWOs-OmK-fA&oe=64895E2E",
//         price: 25,
//         id: 8,
//         category: "clock"
//     },
//     {
//         title: "ცხსენი",
//         price: 25,
//         id: 9,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/305627548_155775457081298_202021500415574194_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bh7z6l0f7voAX-jvnl1&_nc_ht=scontent.fkut1-1.fna&oh=00_AfAM0tcyDOTq39RhYZzZZY_G-WAZojP660_NPeUaZCrokQ&oe=648A86F2",
//         category: "other"
//     },
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 1,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/308606869_158549750137202_316232749334461551_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bRTpucTX53AAX_-Y7qn&_nc_ht=scontent.fkut1-1.fna&oh=00_AfA2dtKjP5RMoi6WDkjIhFWjMjt0U4y2HY-aFIrKXDDH2A&oe=648998E5",
//         category: "stand"
//     },
//     {
//         title: "საათი",
//         price: 25,
//         id: 2,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/312994026_164990866159757_6202450786320086834_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ka4jt2gjBpgAX8kHrc2&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBjjKVg_haGOHC4FkX8pIs8Ot_CBLRnm5gYxjFC7ldOaQ&oe=648A6FDA",
//         category: "clock"
//     },
//     {
//         title: "ცხენი",
//         price: 25,
//         id: 3,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306080125_155775507081293_2498169837097372532_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=58lR5q5ljTwAX_7rNfD&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBFYTGUCU5qQZkHYXCa3VJ5puy46jyN5VU7PMfJe1wSVQ&oe=648A80E2",
//         category: "other"
//     },
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 4,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/316415296_177843838232590_7207661610235231767_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EkJ1AXxYslwAX-bMH4s&_nc_ht=scontent.fkut1-1.fna&oh=00_AfB1ViXyV3PMckZrpxW1oKDuagw9Y0nDEWPwYQkfaeWfyA&oe=6489B8C4",
//         category: "stand"
//     },
//     {
//         title: "სტენდი",
//         price: 25,
//         id: 5,
//         image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/314347222_173979608619013_8918491194610096227_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sjo-MAc7whgAX8EfK4m&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfBjQZy_OJIUGay-uvHVQ_ytowxFb62iIKd3O-SvFKPVVA&oe=648B0A8C",
//         category: "stand"
//     },
//     {
//         title: "საათი",
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/313120364_164990962826414_2657769691278291502_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7WfZ-ZRLPMAAX8uyd0z&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCD0tu-Zoa5Ydp3QT5ZXYu6v2DFDWfn47utT8WKg-SGFA&oe=648A02A8",
//         price: 25,
//         id: 6,
//         category: "stand"
//     },
//     {
//         title: "ცხსენი",
//         price: 25,
//         id: 7,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306124254_155775357081308_6428750173462444642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=zNZO0gKGpngAX9-dQ6b&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCLmZzHCcabF7xnbglcKoJEY0G2b5qUQwtj1TYCwbf0_g&oe=6488CA93",
//         category: "other"
//     },
//     {
//         title: "საათი",
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/340551336_967870177959054_1970464021400864335_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=CHnps_lbabEAX8-fO1s&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBWCa2UNgXkViJMY0rChyeBRalBLjKWaNhlWOs-OmK-fA&oe=64895E2E",
//         price: 25,
//         id: 8,
//         category: "clock"
//     },
//     {
//         title: "ცხსენი",
//         price: 25,
//         id: 9,
//         image: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/305627548_155775457081298_202021500415574194_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bh7z6l0f7voAX-jvnl1&_nc_ht=scontent.fkut1-1.fna&oh=00_AfAM0tcyDOTq39RhYZzZZY_G-WAZojP660_NPeUaZCrokQ&oe=648A86F2",
//         category: "other"
//     },

// ]