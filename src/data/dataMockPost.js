const mockPosts = [{
        "0001": {
            "imgCover": "src/assets/imgs/mockPost.jpg",
            "title": "Mock post 001",
            "description": "Vestibulum in ex et odio condimentum aliquam.",
            "content": "Aenean feugiat sem eget semper porta. Aenean posuere feugiat sollicitudin. Etiam bibendum, erat ac imperdiet pretium, augue nisi sagittis justo, et interdum tellus neque ut ipsum. Aliquam ultricies ligula ut efficitur posuere. Duis egestas congue lorem a posuere. Nam sed viverra neque. Sed ultrices felis ac felis faucibus imperdiet. Etiam vulputate bibendum risus, sollicitudin vehicula sem porttitor quis."
        }
    },
    {
        "0002": {
            "imgCover": "src/assets/imgs/mockPost2.jpg",
            "title": "Mock post 002",
            "description": "Aenean dapibus nisl a arcu suscipit commodo.",
            "content": "Etiam ac justo ut mauris sagittis viverra. Nunc at leo pharetra, pharetra ipsum nec, sodales dolor. Fusce nulla magna, tristique a sollicitudin sit amet, pulvinar eu purus. Vestibulum vulputate arcu vel pharetra semper. Ut ac neque nunc. Integer at risus lectus. Duis suscipit ultrices mauris, a imperdiet orci suscipit sit amet. Curabitur eget magna non elit lobortis rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nec pharetra nisi, et condimentum diam. Maecenas auctor, orci quis pretium dapibus, ante augue commodo erat, hendrerit scelerisque tellus arcu id sapien. Nunc malesuada urna turpis, eget accumsan erat congue vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam et orci ac neque auctor laoreet ut vitae enim."
        }
    },
    {
        "0003": {
            "imgCover": "src/assets/imgs/mockPost3.jpg",
            "title": "Mock post 003",
            "description": "Cras egestas erat eu enim faucibus laoreet.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar risus quis justo consequat, sed vestibulum dui pellentesque. Vestibulum suscipit ante eu porttitor hendrerit. Curabitur convallis tortor velit, commodo ullamcorper nisi blandit id. Integer semper massa luctus, tristique quam id, blandit ex. Quisque turpis metus, eleifend eget posuere ac, sodales vel nisi. Proin aliquam leo eu ipsum dignissim, at varius lectus feugiat. Donec facilisis pharetra fermentum. Donec imperdiet et enim non semper. Fusce ipsum urna, eleifend vitae ipsum sed, porttitor maximus risus. Nam nec feugiat purus. Proin lobortis pulvinar urna ut convallis. Mauris ultricies quam nulla, ullamcorper varius tellus iaculis in. Curabitur ut euismod ex, ac vulputate quam. Duis sed urna dolor."
        }
    },
    {
        "0004": {
            "imgCover": "src/assets/imgs/mockPost4.jpg",
            "title": "Mock post 004",
            "description": "Nunc ut elit eget ipsum pulvinar convallis.",
            "content": "Proin tincidunt convallis leo sed pellentesque. Fusce accumsan eros nisi, ac sagittis lectus sodales a. Ut in arcu ut ligula pharetra fringilla et ac turpis. Donec fermentum elementum augue at elementum. Vestibulum a tellus ac augue laoreet consequat. Ut quis gravida nunc, quis dignissim diam. Suspendisse vulputate, urna sit amet congue commodo, felis ipsum lobortis leo, eget vulputate purus lectus nec libero. Curabitur condimentum auctor tincidunt."
        }
    },
    {
        "0005": {
            "imgCover": "src/assets/imgs/mockPost5.jpg",
            "title": "Mock post 005",
            "description": "Phasellus efficitur turpis quis est tempor, quis faucibus nibh sodales.",
            "content": "Aenean commodo aliquam mi, ac tristique sem tristique eget. Nunc elementum faucibus feugiat. Proin ligula arcu, volutpat eget mi id, ullamcorper efficitur ligula. Mauris eget nulla ut nunc pulvinar convallis a in quam. Duis tempor ultrices nibh at hendrerit. Donec eget purus ante. Integer fringilla dui sit amet viverra varius. Nulla dignissim iaculis molestie. Nam quis tellus dapibus, laoreet nisl at, hendrerit dui. Maecenas tristique lacinia sapien in porta. Nulla dictum, risus ut egestas efficitur, lectus mauris maximus risus, at luctus eros velit a urna. Donec suscipit pellentesque aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    },
    {
        "0006": {
            "imgCover": "src/assets/imgs/mockPost6.jpg",
            "title": "Mock post 006",
            "description": "Sed sit amet magna pharetra, scelerisque augue eu, pellentesque velit.",
            "content": "Cras vel lobortis dui. Praesent viverra nunc rhoncus porta laoreet. Pellentesque condimentum finibus ligula id consectetur. Maecenas sem nulla, fermentum a finibus a, convallis ut eros. Nunc sit amet ornare ipsum. Curabitur tempor velit sit amet purus ornare, non imperdiet sapien dapibus. Morbi tincidunt purus id nisl porta placerat. Duis id accumsan enim."
        }
    },
    {
        "0007": {
            "imgCover": "src/assets/imgs/mockPost7.jpg",
            "title": "Mock post 007",
            "description": "Vivamus a sapien malesuada, euismod dolor ut, faucibus nulla.",
            "content": "Sed viverra, libero hendrerit eleifend ullamcorper, eros erat fermentum justo, eu bibendum neque odio et augue. Suspendisse mollis, mauris sit amet fringilla ultricies, lorem sem scelerisque nunc, ac laoreet purus purus sit amet velit. Duis hendrerit ultricies arcu vel blandit. Etiam eu varius est. Aenean est ex, tristique sit amet fermentum a, consectetur et dui. Praesent feugiat tellus sed libero posuere cursus. Vestibulum molestie id ligula ut semper. Vivamus tempor eget augue et vulputate."
        }
    },
    {
        "0008": {
            "imgCover": "src/assets/imgs/mockPost8.jpg",
            "title": "Mock post 008",
            "description": "Ut porta dui quis rhoncus mollis",
            "content": "Proin ut eros placerat, pellentesque purus ut, venenatis tortor. Phasellus sapien neque, imperdiet sed erat in, bibendum molestie tellus. Vestibulum sed vulputate nulla, feugiat gravida sem. Curabitur consequat velit lorem, sit amet hendrerit ligula tempus at. Quisque placerat dolor vitae enim accumsan semper. Ut vitae ligula rhoncus, posuere odio quis, porttitor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum dapibus leo, vel tincidunt quam scelerisque at. Nunc dolor diam, suscipit vehicula purus at, lacinia sodales sapien. Fusce in odio sed ipsum cursus pharetra. Vestibulum at sem in metus tincidunt interdum sit amet sit amet diam. Nullam in sodales augue. Nam id orci pulvinar, hendrerit dui sed, lobortis quam. Suspendisse eget neque sapien. Nunc auctor scelerisque iaculis. Etiam et rutrum lectus, et pellentesque elit."
        }
    },
    {
        "0009": {
            "imgCover": "src/assets/imgs/mockPost9.jpg",
            "title": "Mock post 009",
            "description": "Pellentesque cursus neque sed arcu auctor accumsan.",
            "content": "Morbi iaculis ligula non cursus iaculis. Quisque posuere efficitur facilisis. Cras eu vulputate magna. Curabitur facilisis et enim a blandit. Duis vulputate tellus accumsan, finibus mauris sed, fringilla ante. In id odio risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla laoreet massa enim, eget dignissim erat pellentesque sit amet. Fusce a lorem egestas, tempor felis dignissim, volutpat arcu. Nunc ultricies ligula id magna elementum tempus. Ut aliquam tortor non lorem finibus, a euismod lorem lacinia. Praesent aliquet justo massa, sed sagittis lectus commodo vitae. Nullam elementum venenatis semper. Donec accumsan eget dui vitae elementum. Nulla scelerisque magna eget tempus hendrerit. Vivamus imperdiet at enim sit amet pretium."
        }
    },
    {
        "0010": {
            "imgCover": "src/assets/imgs/mockPost10.jpg",
            "title": "Mock post 010",
            "description": "Quisque ac dui ut purus luctus accumsan.",
            "content": "Duis sed dui augue. Vestibulum et eros non enim efficitur viverra. Donec consectetur justo quis lacus sollicitudin gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur ac metus at vehicula. Aenean tempor lectus quis mauris pulvinar scelerisque. In imperdiet tortor vel nisl pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac justo a tortor dictum dapibus a rhoncus justo. Fusce maximus, nibh sit amet interdum interdum, ex neque tincidunt erat, aliquam fermentum diam dolor vitae mauris. Integer vehicula eros sit amet ligula feugiat finibus. In elementum fringilla vestibulum. Sed ultrices imperdiet justo eget consequat."
        }
    },
    {
        "0011": {
            "imgCover": "src/assets/imgs/mockPost11.jpg",
            "title": "Mock post 011",
            "description": "Pellentesque cursus neque sed arcu auctor accumsan.",
            "content": "Praesent id scelerisque lorem. Proin purus ipsum, tincidunt ac ullamcorper ut, egestas eget leo. Vestibulum ac pharetra mi. Aliquam a luctus elit. Ut a eleifend velit, nec tincidunt sem. Quisque nec lectus sapien. Donec ultricies tincidunt orci, sit amet vulputate nunc consequat id. Proin a tempus libero. Nam convallis egestas neque sollicitudin rhoncus. Praesent vel enim non nulla pretium vestibulum. Curabitur dictum ac risus et bibendum. Suspendisse porta iaculis neque. Ut in semper sem. Sed aliquam, felis id interdum facilisis, massa arcu sollicitudin urna, quis mattis nisi neque a est. Nam pharetra finibus dolor, sit amet scelerisque neque. Fusce ornare ullamcorper nibh, ut venenatis nibh ullamcorper et."
        }
    },
    {
        "0012" : {
            "imgCover": "src/assets/imgs/mockPost12.jpg",
            "title": "Mock post 012",
            "description": "Vestibulum in ex et odio condimentum aliquam.",
            "content": "Aenean feugiat sem eget semper porta. Aenean posuere feugiat sollicitudin. Etiam bibendum, erat ac imperdiet pretium, augue nisi sagittis justo, et interdum tellus neque ut ipsum. Aliquam ultricies ligula ut efficitur posuere. Duis egestas congue lorem a posuere. Nam sed viverra neque. Sed ultrices felis ac felis faucibus imperdiet. Etiam vulputate bibendum risus, sollicitudin vehicula sem porttitor quis."
        }
    },
    {
        "0013" : {
            "imgCover": "src/assets/imgs/mockPost13.jpg",
            "title": "Mock post 013",
            "description": "Aenean dapibus nisl a arcu suscipit commodo.",
            "content": "Etiam ac justo ut mauris sagittis viverra. Nunc at leo pharetra, pharetra ipsum nec, sodales dolor. Fusce nulla magna, tristique a sollicitudin sit amet, pulvinar eu purus. Vestibulum vulputate arcu vel pharetra semper. Ut ac neque nunc. Integer at risus lectus. Duis suscipit ultrices mauris, a imperdiet orci suscipit sit amet. Curabitur eget magna non elit lobortis rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nec pharetra nisi, et condimentum diam. Maecenas auctor, orci quis pretium dapibus, ante augue commodo erat, hendrerit scelerisque tellus arcu id sapien. Nunc malesuada urna turpis, eget accumsan erat congue vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam et orci ac neque auctor laoreet ut vitae enim."
        }
    },
    {
        "0014" : {
            "imgCover": "src/assets/imgs/mockPost14.jpg",
            "title": "Mock post 0014",
            "description": "Cras egestas erat eu enim faucibus laoreet.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar risus quis justo consequat, sed vestibulum dui pellentesque. Vestibulum suscipit ante eu porttitor hendrerit. Curabitur convallis tortor velit, commodo ullamcorper nisi blandit id. Integer semper massa luctus, tristique quam id, blandit ex. Quisque turpis metus, eleifend eget posuere ac, sodales vel nisi. Proin aliquam leo eu ipsum dignissim, at varius lectus feugiat. Donec facilisis pharetra fermentum. Donec imperdiet et enim non semper. Fusce ipsum urna, eleifend vitae ipsum sed, porttitor maximus risus. Nam nec feugiat purus. Proin lobortis pulvinar urna ut convallis. Mauris ultricies quam nulla, ullamcorper varius tellus iaculis in. Curabitur ut euismod ex, ac vulputate quam. Duis sed urna dolor."
        }
    },
    {
        "0015" : {
            "imgCover": "src/assets/imgs/mockPost15.jpg",
            "title": "Mock post 015",
            "description": "Nunc ut elit eget ipsum pulvinar convallis.",
            "content": "Proin tincidunt convallis leo sed pellentesque. Fusce accumsan eros nisi, ac sagittis lectus sodales a. Ut in arcu ut ligula pharetra fringilla et ac turpis. Donec fermentum elementum augue at elementum. Vestibulum a tellus ac augue laoreet consequat. Ut quis gravida nunc, quis dignissim diam. Suspendisse vulputate, urna sit amet congue commodo, felis ipsum lobortis leo, eget vulputate purus lectus nec libero. Curabitur condimentum auctor tincidunt."
        }
    }
];

export { mockPosts }