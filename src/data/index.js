export const mockData=[
    {
        id:1,
        name:"Folder 1",
        type:"folder",
        innerContent:[
            {
                id:1,
                name:"File 1",
                type:"file",
            },
            {
                id:2,
                name:"File 2",
                type:"file",
            },
            {
                id:3,
                name:"File 3",
                type:"file",
            },
            {
                id:4,
                name:"Inner Folder 1",
                type:"folder",
                innerContent: [
                    {
                        id:1,
                        name:"Inner Folder File 1",
                        type:"file",
                    },
                    {
                        id:2,
                        name:"Inner Folder File 2",
                        type:"file",
                    },
                    {
                        id:3,
                        name:"Inner Folder File 3",
                        type:"file",
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name:"Folder 2",
        type:"folder",
        innerContent:[
            {
                id:1,
                name:"File 1 of Folder 2",
                type:"file",
            },
            {
                id:2,
                name:"File 2 of Folder 2",
                type:"file",
            },
            {
                id:3,
                name:"File 3 of Folder 2",
                type:"file",
            },
            {
                id:4,
                name:"Inner Folder 12",
                type:"folder",
                innerContent: [
                    {
                        id:1,
                        name:"Inner Folder File 1",
                        type:"file",
                    },
                    {
                        id:2,
                        name:"Inner Inner Folder",
                        type:"folder",
                        innerContent:[
                            {
                                id:1,
                                name:"Very Inner File ",
                                type:"file",
                            },
                        ]
                    },
                ]
            }
        ]
    }
]