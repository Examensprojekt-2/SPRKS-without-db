import CardSlider from '../components/slider/cardSlider';

function LikedGames() {

    const cardData =  [
        {
            picture: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            header: "Liked Games 1",
            text: "Text liked games 2",
            likes: 24,
            tags: ["#Strategy", "#Racing"]
            
        },
        {   
            picture: "https://cdn.vox-cdn.com/thumbor/ADYxDCTUKewcGxhYGZ_XMUh4uzQ=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64035800/acastro_190618_1777_cloud_gaming_0003.0.jpg",
            header: "Liked Games 2",
            text: "Text liked games 2",
            likes: 55,
            tags: ["#Racing"]
        },
        {
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXRUIdiK-yCRHaU4pzkKMIHO7kKdMh4cwaSnq7cBcFI_o3tlEfB9150Vz95Hry_fKlB8&usqp=CAU",
            header: "Liked Games 3",
            text: "Text liked games 3",
            likes: 234,
            tags: ["#Action"]
        }
    ]

    return (
        <CardSlider cardData={cardData}/>
    )
}

export default LikedGames;