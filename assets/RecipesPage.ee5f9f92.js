import{Q as l}from"./QPage.b3031da7.js";import{Q as o}from"./QTable.4f59c1c4.js";import{l as n,m as u,n as m,P as t,f as c}from"./index.a5b05cd4.js";import"./QList.eea01ad0.js";import"./QSelect.31a4a61e.js";import"./QField.c93c9e13.js";import"./format.461987d7.js";const d={__name:"RecipeLists",setup(s){const a=[{name:"name",required:!0,label:"Bitki Ad\u0131",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"description",label:"A\xE7\u0131klama",align:"left",field:"description",sortable:!1},{name:"instruction",label:"Talimatlar",align:"left",field:"instruction",sortable:!1},{name:"ingredients",label:"\u0130\xE7indekiler",align:"left",field:"ingredients",sortable:!1},{name:"nutritionValue",label:"Besin De\u011Feri",align:"center",field:"nutritionValue",format:e=>`${e}`,sortable:!0},{name:"temperature",label:"S\u0131cakl\u0131k (\xB0C)",align:"center",field:"temperature",format:e=>`${e}\xB0C`,sortable:!0},{name:"notes",label:"Notlar",align:"left",field:"notes",sortable:!1},{name:"tags",label:"Etiketler",align:"left",field:"tags",sortable:!1},{name:"germinationTime",label:"\xC7imlenme S\xFCresi (G\xFCn)",align:"center",field:"germinationTime",format:e=>`${e} g\xFCn`,sortable:!0},{name:"vegetationTime",label:"Vejetasyon S\xFCresi (G\xFCn)",align:"center",field:"vegetationTime",format:e=>`${e} g\xFCn`,sortable:!0},{name:"floweringTime",label:"\xC7i\xE7eklenme S\xFCresi (G\xFCn)",align:"center",field:"floweringTime",format:e=>`${e} g\xFCn`,sortable:!0},{name:"totalDuration",label:"Toplam S\xFCre (G\xFCn)",align:"center",field:"totalDuration",format:e=>`${e} g\xFCn`,sortable:!0},{name:"categoryId",label:"Kategori",align:"center",field:"categoryId",sortable:!0},{name:"dailyLightingOnDuration",label:"G\xFCnl\xFCk Ayd\u0131nlatma S\xFCresi (Saat)",align:"center",field:"dailyLightingOnDuration",format:e=>`${e} saat`,sortable:!0}],i=[{name:"Ficus godeffroyi Warb.",description:"curabitur in libero ut",instruction:"augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",ingredients:"mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",nutritionValue:64,temperature:27,notes:"ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",tags:"ac enim in",germinationTime:40,vegetationTime:96,floweringTime:77,totalDuration:82,categoryId:"Moraceae",dailyLightingOnDuration:8},{name:"Monardella frutescens (Hoover) Jokerst",description:"ac nibh fusce lacus purus",instruction:"maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",ingredients:"odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",nutritionValue:52,temperature:30,notes:"eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",tags:"elementum pellentesque quisque",germinationTime:63,vegetationTime:78,floweringTime:92,totalDuration:92,categoryId:"Lamiaceae",dailyLightingOnDuration:24},{name:"Eriastrum sparsiflorum (Eastw.) H. Mason",description:"vitae consectetuer eget rutrum at",instruction:"ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",ingredients:"interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",nutritionValue:18,temperature:32,notes:"enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",tags:"id mauris vulputate elementum",germinationTime:62,vegetationTime:34,floweringTime:29,totalDuration:41,categoryId:"Polemoniaceae",dailyLightingOnDuration:14},{name:"Dodecatheon clevelandii Greene ssp. sanctarum (Greene) Abrams",description:"sapien varius ut blandit",instruction:"justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",ingredients:"convallis tortor risus dapibus augue vel accumsan tellus nisi eu",nutritionValue:53,temperature:36,notes:"imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",tags:"consectetuer eget rutrum at",germinationTime:4,vegetationTime:9,floweringTime:80,totalDuration:83,categoryId:"Primulaceae",dailyLightingOnDuration:18},{name:"Toona ciliata Roem. ssp. ciliata",description:"lorem vitae mattis nibh ligula",instruction:"posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",ingredients:"pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",nutritionValue:14,temperature:23,notes:"non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",tags:"eu massa donec dapibus duis",germinationTime:78,vegetationTime:64,floweringTime:33,totalDuration:61,categoryId:"Meliaceae",dailyLightingOnDuration:8},{name:"Carex lativena S.D. Jones & G.D. Jones",description:"dapibus augue vel",instruction:"condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",ingredients:"diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",nutritionValue:48,temperature:31,notes:"luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus",tags:"velit id pretium iaculis diam",germinationTime:96,vegetationTime:6,floweringTime:86,totalDuration:36,categoryId:"Cyperaceae",dailyLightingOnDuration:15},{name:"Gratiola graniticola D. Estes",description:"diam erat fermentum justo",instruction:"natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",ingredients:"tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",nutritionValue:11,temperature:32,notes:"quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",tags:"lacus morbi quis tortor id",germinationTime:44,vegetationTime:47,floweringTime:46,totalDuration:70,categoryId:"Scrophulariaceae",dailyLightingOnDuration:9},{name:"Hudsonia tomentosa Nutt.",description:"sem praesent id",instruction:"in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",ingredients:"lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",nutritionValue:21,temperature:24,notes:"orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat",tags:"in tempus sit amet sem fusce",germinationTime:86,vegetationTime:45,floweringTime:89,totalDuration:6,categoryId:"Cistaceae",dailyLightingOnDuration:11},{name:"Xyris complanata R. Br.",description:"pretium nisl ut volutpat sapien",instruction:"urna ut tellus nulla ut erat id mauris vulputate elementum nullam",ingredients:"quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",nutritionValue:58,temperature:35,notes:"amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",tags:"ut erat curabitur gravida nisi at",germinationTime:43,vegetationTime:43,floweringTime:49,totalDuration:62,categoryId:"Xyridaceae",dailyLightingOnDuration:12},{name:"Ceanothus gloriosus J.T. Howell",description:"tellus in sagittis dui",instruction:"elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",ingredients:"enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",nutritionValue:94,temperature:32,notes:"sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",tags:"primis in faucibus",germinationTime:4,vegetationTime:95,floweringTime:44,totalDuration:88,categoryId:"Rhamnaceae",dailyLightingOnDuration:23},{name:"Clematis hirsutissima Pursh var. scottii (Porter) Erickson",description:"amet diam in magna bibendum",instruction:"arcu sed augue aliquam erat volutpat in congue etiam justo etiam",ingredients:"viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam",nutritionValue:18,temperature:22,notes:"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",tags:"molestie sed justo pellentesque viverra pede",germinationTime:29,vegetationTime:55,floweringTime:63,totalDuration:2,categoryId:"Ranunculaceae",dailyLightingOnDuration:13},{name:"Silene occidentalis S. Watson ssp. longistipitata C.L. Hitchc. & Maguire",description:"amet diam in magna bibendum",instruction:"parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",ingredients:"praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",nutritionValue:96,temperature:33,notes:"mi pede malesuada in imperdiet et commodo vulputate justo in blandit",tags:"enim blandit mi in",germinationTime:74,vegetationTime:84,floweringTime:40,totalDuration:54,categoryId:"Caryophyllaceae",dailyLightingOnDuration:19},{name:"Bertholletia excelsa Humb. & Bonpl.",description:"nec nisi vulputate",instruction:"orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat",ingredients:"id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",nutritionValue:98,temperature:35,notes:"neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",tags:"duis ac nibh fusce lacus",germinationTime:79,vegetationTime:61,floweringTime:87,totalDuration:36,categoryId:"Lecythidaceae",dailyLightingOnDuration:20},{name:"Chamaecrista deeringiana Small & Pennell",description:"leo odio condimentum id",instruction:"ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",ingredients:"dui vel nisl duis ac nibh fusce lacus purus aliquet",nutritionValue:73,temperature:26,notes:"adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",tags:"vitae nisl aenean",germinationTime:79,vegetationTime:40,floweringTime:21,totalDuration:24,categoryId:"Fabaceae",dailyLightingOnDuration:8},{name:"Phacelia geraniifolia Brand",description:"placerat praesent blandit nam nulla",instruction:"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",ingredients:"sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",nutritionValue:71,temperature:31,notes:"vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",tags:"sollicitudin mi sit amet lobortis sapien",germinationTime:100,vegetationTime:98,floweringTime:95,totalDuration:86,categoryId:"Hydrophyllaceae",dailyLightingOnDuration:12},{name:"Heterotheca pumila (Greene) Semple",description:"orci luctus et",instruction:"maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",ingredients:"tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque",nutritionValue:36,temperature:29,notes:"eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",tags:"volutpat quam pede",germinationTime:40,vegetationTime:25,floweringTime:49,totalDuration:37,categoryId:"Asteraceae",dailyLightingOnDuration:10},{name:"Gliricidia sepium (Jacq.) Kunth ex Walp.",description:"sapien sapien non mi",instruction:"lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",ingredients:"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",nutritionValue:21,temperature:25,notes:"mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",tags:"neque vestibulum eget vulputate ut",germinationTime:26,vegetationTime:86,floweringTime:79,totalDuration:46,categoryId:"Fabaceae",dailyLightingOnDuration:17},{name:"Cyanea cylindrocalyx (Rock) Lammers",description:"a libero nam dui",instruction:"nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",ingredients:"erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",nutritionValue:14,temperature:26,notes:"in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",tags:"fermentum justo nec condimentum neque sapien",germinationTime:7,vegetationTime:30,floweringTime:100,totalDuration:64,categoryId:"Campanulaceae",dailyLightingOnDuration:20},{name:"Psilactis brevilingulata Sch. Bip. ex Hemsl.",description:"habitasse platea dictumst",instruction:"lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",ingredients:"viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",nutritionValue:20,temperature:33,notes:"in libero ut massa volutpat convallis morbi odio odio elementum",tags:"a odio in hac habitasse platea",germinationTime:88,vegetationTime:73,floweringTime:4,totalDuration:89,categoryId:"Asteraceae",dailyLightingOnDuration:17},{name:"Heliotropium greggii Torr.",description:"mauris lacinia sapien quis libero",instruction:"rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",ingredients:"porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",nutritionValue:77,temperature:23,notes:"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",tags:"justo in blandit ultrices enim lorem",germinationTime:22,vegetationTime:41,floweringTime:3,totalDuration:61,categoryId:"Boraginaceae",dailyLightingOnDuration:8},{name:"Impatiens balfourii Hook. f.",description:"sed lacus morbi",instruction:"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",ingredients:"habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",nutritionValue:92,temperature:29,notes:"id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit",tags:"et ultrices posuere cubilia",germinationTime:21,vegetationTime:38,floweringTime:27,totalDuration:89,categoryId:"Balsaminaceae",dailyLightingOnDuration:8},{name:"Hypoxis L.",description:"amet eleifend pede libero quis",instruction:"sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",ingredients:"ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",nutritionValue:26,temperature:26,notes:"cursus id turpis integer aliquet massa id lobortis convallis tortor",tags:"mauris viverra diam",germinationTime:58,vegetationTime:28,floweringTime:4,totalDuration:16,categoryId:"Liliaceae",dailyLightingOnDuration:10},{name:"Galium angustifolium Nutt. ex A. Gray ssp. onycense (Dempster) Dempster & Stebbins",description:"sed vestibulum sit",instruction:"consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",ingredients:"amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",nutritionValue:56,temperature:34,notes:"rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",tags:"vel sem sed sagittis nam",germinationTime:8,vegetationTime:51,floweringTime:3,totalDuration:23,categoryId:"Rubiaceae",dailyLightingOnDuration:23},{name:"Vanilla claviculata (W. Wright) Sw.",description:"augue vel accumsan tellus",instruction:"parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",ingredients:"penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",nutritionValue:21,temperature:32,notes:"eu mi nulla ac enim in tempor turpis nec euismod scelerisque",tags:"ultrices posuere cubilia curae nulla",germinationTime:44,vegetationTime:71,floweringTime:53,totalDuration:12,categoryId:"Orchidaceae",dailyLightingOnDuration:15},{name:"Lupinus excubitus M.E. Jones var. hallii (Abrams) C.P. Sm.",description:"nibh in quis justo",instruction:"elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",ingredients:"ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",nutritionValue:47,temperature:22,notes:"posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",tags:"sapien varius ut blandit non interdum",germinationTime:9,vegetationTime:94,floweringTime:48,totalDuration:67,categoryId:"Fabaceae",dailyLightingOnDuration:20},{name:"Dioscorea elephantipes (L'H\xE9r.) Engl.",description:"integer non velit donec diam",instruction:"suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",ingredients:"ligula sit amet eleifend pede libero quis orci nullam molestie",nutritionValue:40,temperature:35,notes:"ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim",tags:"nam dui proin leo",germinationTime:91,vegetationTime:99,floweringTime:95,totalDuration:96,categoryId:"Dioscoreaceae",dailyLightingOnDuration:16},{name:"Citrus medica L.",description:"diam neque vestibulum eget vulputate",instruction:"non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",ingredients:"nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper",nutritionValue:99,temperature:37,notes:"elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",tags:"curabitur gravida nisi",germinationTime:14,vegetationTime:64,floweringTime:14,totalDuration:54,categoryId:"Rutaceae",dailyLightingOnDuration:21},{name:"Cryptothele permiscens (Nyl.) Th. Fr.",description:"nisi at nibh in",instruction:"mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",ingredients:"amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",nutritionValue:64,temperature:31,notes:"ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",tags:"consectetuer adipiscing elit proin interdum",germinationTime:38,vegetationTime:31,floweringTime:45,totalDuration:78,categoryId:"Lichinaceae",dailyLightingOnDuration:23},{name:"Nemacladus rubescens Greene var. tenuis McVaugh",description:"quam turpis adipiscing lorem",instruction:"quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",ingredients:"varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",nutritionValue:47,temperature:22,notes:"etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",tags:"sit amet turpis",germinationTime:9,vegetationTime:88,floweringTime:63,totalDuration:42,categoryId:"Campanulaceae",dailyLightingOnDuration:8},{name:"Hymenopappus filifolius Hook. var. polycephalus (Osterh.) B.L. Turner",description:"vestibulum ante ipsum primis in",instruction:"nisi eu orci mauris lacinia sapien quis libero nullam sit amet",ingredients:"sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",nutritionValue:96,temperature:33,notes:"ut tellus nulla ut erat id mauris vulputate elementum nullam varius",tags:"faucibus orci luctus et ultrices",germinationTime:45,vegetationTime:99,floweringTime:56,totalDuration:24,categoryId:"Asteraceae",dailyLightingOnDuration:22},{name:"Festuca rubra L. ssp. aucta (Krecz. & Bobr.) Hult\xE9n",description:"sed interdum venenatis",instruction:"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",ingredients:"condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",nutritionValue:57,temperature:24,notes:"nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",tags:"dolor vel est donec odio",germinationTime:29,vegetationTime:76,floweringTime:42,totalDuration:73,categoryId:"Poaceae",dailyLightingOnDuration:9},{name:"Carex stipata Muhl. ex Willd.",description:"pellentesque viverra pede",instruction:"molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas",ingredients:"euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",nutritionValue:14,temperature:37,notes:"vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",tags:"cras in purus eu magna",germinationTime:12,vegetationTime:19,floweringTime:47,totalDuration:61,categoryId:"Cyperaceae",dailyLightingOnDuration:19},{name:"Carphephorus pseudoliatris Cass.",description:"vel ipsum praesent blandit",instruction:"cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",ingredients:"erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",nutritionValue:67,temperature:21,notes:"pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla",tags:"varius nulla facilisi cras non velit",germinationTime:97,vegetationTime:88,floweringTime:84,totalDuration:68,categoryId:"Asteraceae",dailyLightingOnDuration:24},{name:"Allionia L.",description:"felis ut at",instruction:"erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",ingredients:"ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",nutritionValue:35,temperature:36,notes:"aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",tags:"felis ut at dolor",germinationTime:58,vegetationTime:99,floweringTime:84,totalDuration:97,categoryId:"Nyctaginaceae",dailyLightingOnDuration:14},{name:"Bauhinia monandra Kurz",description:"elementum pellentesque quisque porta",instruction:"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",ingredients:"tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",nutritionValue:76,temperature:24,notes:"curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut",tags:"integer tincidunt ante vel ipsum",germinationTime:63,vegetationTime:44,floweringTime:5,totalDuration:43,categoryId:"Fabaceae",dailyLightingOnDuration:10},{name:"Festuca idahoensis Elmer ssp. idahoensis",description:"ligula nec sem duis aliquam",instruction:"vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",ingredients:"blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et",nutritionValue:10,temperature:23,notes:"nec dui luctus rutrum nulla tellus in sagittis dui vel",tags:"dis parturient montes nascetur",germinationTime:68,vegetationTime:14,floweringTime:8,totalDuration:23,categoryId:"Poaceae",dailyLightingOnDuration:17},{name:"Baptisia bracteata Muhl. ex Elliott var. laevicaulis (A. Gray ex Canby) Isely",description:"sem sed sagittis nam congue",instruction:"magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",ingredients:"commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",nutritionValue:70,temperature:20,notes:"aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac",tags:"lacus at turpis donec posuere metus",germinationTime:13,vegetationTime:61,floweringTime:14,totalDuration:8,categoryId:"Fabaceae",dailyLightingOnDuration:8},{name:"Carex \xD7langeana Fernald (pro sp.)",description:"dictumst morbi vestibulum velit id",instruction:"et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",ingredients:"suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",nutritionValue:10,temperature:37,notes:"lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",tags:"sollicitudin ut suscipit a feugiat et",germinationTime:10,vegetationTime:69,floweringTime:93,totalDuration:46,categoryId:"Cyperaceae",dailyLightingOnDuration:23},{name:"Horkelia fusca Lindl. ssp. filicoides (Crum) D.D. Keck",description:"non mi integer ac",instruction:"purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in",ingredients:"posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",nutritionValue:96,temperature:25,notes:"sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",tags:"consectetuer eget rutrum at lorem integer",germinationTime:27,vegetationTime:10,floweringTime:43,totalDuration:48,categoryId:"Rosaceae",dailyLightingOnDuration:8},{name:"Enydra fluctuans Lour.",description:"consequat lectus in est risus",instruction:"nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",ingredients:"dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",nutritionValue:36,temperature:38,notes:"lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",tags:"in hac habitasse platea",germinationTime:40,vegetationTime:81,floweringTime:86,totalDuration:25,categoryId:"Asteraceae",dailyLightingOnDuration:10}],r=()=>({page:1,rowsPerPage:10,sortBy:"name",descending:!1,rowsNumber:i.length});return(e,p)=>(n(),u(o,{flat:"",bordered:"",title:"Re\xE7ete Tablosu",dense:"",rows:i,columns:a,"row-key":"name",pagination:r}))}},g={class:"row items-start q-gutter-md q-pa-md"},D={__name:"RecipesPage",setup(s){return(a,i)=>(n(),u(l,null,{default:m(()=>[i[0]||(i[0]=t("div",{class:"row q-pa-md"},[t("div",{class:"page-title"},"Re\xE7eteler")],-1)),t("div",g,[c(d,{class:"col-md q-pa-md"})])]),_:1}))}};export{D as default};
