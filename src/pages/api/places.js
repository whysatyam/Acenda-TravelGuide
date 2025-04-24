export default function handler(req, res) {
  const data = {
    states: [
      {
        name: "Andhra Pradesh",
        tag: "AP",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Visakhapatnam",
            description:
              "A beautiful coastal city known for its beaches and scenic beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742638639/photo-1609854534028-b512f5246abc_gvuqtk.jpg",
          },
          {
            name: "Tirupati",
            description:
              "Famous for the Tirumala Venkateswara Temple, a major pilgrimage site.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742638869/photo-1623039003809-6ecabd1e2b1c_huhdsx.jpg",
          },
          {
            name: "Vijayawada",
            description:
              "A bustling city known for its historic temples and vibrant culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742638977/photo-1653833386093-159d3aacfb7f_v5fl4d.jpg",
          },
          {
            name: "Amaravati",
            description:
              "The de facto capital of Andhra Pradesh with historical significance.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639085/photo-1655301897181-88c124e09c28_gazpfi.jpg",
          },
          {
            name: "Kurnool",
            description:
              "A historic city known for its forts, caves, and temples.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639198/photo-1626940759746-8f7e4c76a7f9_sqwtkr.jpg",
          },
        ],
      },
      {
        name: "Arunachal Pradesh",
        tag: "AR",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "quiet",
        places: [
          {
            name: "Tawang",
            description:
              "A stunning hill town known for its monasteries and snow-capped mountains.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639360/photo-1626761627604-f27d98885f4b_udasrf.jpg",
          },
          {
            name: "Ziro Valley",
            description:
              "A picturesque valley famous for its lush greenery and tribal culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639666/photo-1467541473380-93479a5a3ffa_wwjgzq.jpg",
          },
          {
            name: "Bomdila",
            description:
              "A peaceful town offering breathtaking views of the Himalayas.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639807/photo-1638192384819-34342acb1edf_ltwi4y.jpg",
          },
          {
            name: "Itanagar",
            description:
              "The capital city with a mix of natural beauty and modern infrastructure.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639906/photo-1713501849645-2611640ffc9f_darc14.jpg",
          },
          {
            name: "Dirang",
            description:
              "A charming village known for its hot water springs and monasteries.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742639989/photo-1595978141469-0f8f9bf9e4ee_d8upxn.jpg",
          },
        ],
      },
      {
        name: "Assam",
        tag: "AS",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "quiet",
        places: [
          {
            name: "Guwahati",
            description:
              "A vibrant city known for the Kamakhya Temple and Brahmaputra River.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742640120/photo-1604558705607-75e981ad24cf_lqkrfx.jpg",
          },
          {
            name: "Kaziranga",
            description:
              "Home to the famous one-horned rhinoceros and a UNESCO World Heritage Site.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742640195/photo-1675296098616-53e3d4a1dd57_cysmtv.jpg",
          },
          {
            name: "Jorhat",
            description:
              "A cultural hub known for its tea gardens and historic sites.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742641161/photo-1583921874013-cf28b404566f_wi86rr.jpg",
          },
          {
            name: "Tezpur",
            description:
              "A scenic town with rich mythology and natural beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742641360/photo-1611336814186-914161b9bdb6_myh9xz.jpg",
          },
          {
            name: "Silchar",
            description:
              "A major city in southern Assam known for its tea industry and cultural heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742641465/photo-1524115421888-ea696c03989f_zwufro.jpg",
          },
        ],
      },
      {
        name: "Bihar",
        tag: "BR",
        cost: "low",
        safety: "risky",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Patna",
            description:
              "The capital city with historical sites and a rich cultural heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742641639/photo-1553089322-ba31bcdc54d3_l4qh0r.jpg",
          },
          {
            name: "Bodh Gaya",
            description:
              "A major Buddhist pilgrimage site where Gautama Buddha attained enlightenment.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742641716/photo-1543252655-02bd4539263e_svetxi.jpg",
          },
          {
            name: "Nalanda",
            description:
              "Famous for the ruins of the ancient Nalanda University.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642017/photo-1736235300171-eb8aa382b594_edotta.jpg",
          },
          {
            name: "Rajgir",
            description:
              "A historical town surrounded by hills and hot springs.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642091/photo-1648975482235-b6e58254a773_iohajk.jpg",
          },
          {
            name: "Gaya",
            description:
              "A sacred city known for Vishnupad Temple and its religious significance.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642183/photo-1622194993926-1801586d460f_naph33.jpg",
          },
        ],
      },
      {
        name: "Chhattisgarh",
        tag: "CG",
        cost: "low",
        safety: "safe",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Raipur",
            description:
              "The capital city known for its lakes, temples, and vibrant culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642419/photo-1439066290691-510066268af5_bcbphq.jpg",
          },
          {
            name: "Jagdalpur",
            description: "A scenic town surrounded by waterfalls and forests.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642495/photo-1625979061911-e3673d9a5385_miy4c2.jpg",
          },
          {
            name: "Bilaspur",
            description:
              "A city famous for its rich history and vibrant markets.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642615/photo-1587548470102-dbca566d2275_wkqdhh.jpg",
          },
          {
            name: "Dantewada",
            description:
              "A tribal area with mesmerizing landscapes and temples.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642734/photo-1547126627-af8df614498c_ldemvt.jpg",
          },
          {
            name: "Bastar",
            description:
              "Known for its dense forests, waterfalls, and tribal culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742642865/photo-1724746109225-f82bef464c7d_m8arvh.jpg",
          },
        ],
      },
      {
        name: "Goa",
        tag: "GA",
        cost: "high",
        safety: "safe",
        type: "beaches",
        crowd: "crowded",
        places: [
          {
            name: "Calangute Beach",
            description:
              "One of the most famous beaches in Goa, known for its vibrant nightlife and water sports.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742643066/photo-1736960913781-517157b699e3_mrjxdd.jpg",
          },
          {
            name: "Baga Beach",
            description:
              "A popular beach with shacks, restaurants, and thrilling nightlife.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742643332/photo-1560179406-1c6c60e0dc76_cu4l27.jpg",
          },
          {
            name: "Dudhsagar Falls",
            description:
              "A breathtaking waterfall located on the Goa-Karnataka border.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742643661/photo-1581892197913-fd2e407e698a_ca0gra.jpg",
          },
          {
            name: "Fort Aguada",
            description:
              "A well-preserved Portuguese fort offering stunning sea views.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742643769/photo-1636874161710-3bccf58a1034_i5b31n.jpg",
          },
          {
            name: "Anjuna Beach",
            description:
              "Famous for its trance parties, flea markets, and scenic beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742643922/photo-1575747687077-b7a4bb468f65_aljxcf.jpg",
          },
        ],
      },
      {
        name: "Gujarat",
        tag: "GJ",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Ahmedabad",
            description:
              "A major city known for its rich history and vibrant culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742644032/photo-1587366333633-9ba766bab91d_tmcwip.jpg",
          },
          {
            name: "Gir National Park",
            description:
              "Home to the majestic Asiatic lions and diverse wildlife.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742644338/photo-1715601719007-0fd056192675_q1nlrw.jpg",
          },
          {
            name: "Somnath Temple",
            description:
              "A famous pilgrimage site on the western coast of India.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742644421/photo-1591700430569-9469d38b1006_pjbg69.jpg",
          },
          {
            name: "Rann of Kutch",
            description:
              "A stunning white salt desert known for the Rann Utsav festival.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742644489/photo-1549468057-5b7fa1a41d7a_axektd.jpg",
          },
          {
            name: "Statue of Unity",
            description:
              "The world's tallest statue dedicated to Sardar Vallabhbhai Patel.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742644607/photo-1621859294461-2e6e4bf0e689_tqfxfb.jpg",
          },
        ],
      },
      {
        name: "Haryana",
        tag: "HR",
        cost: "low",
        safety: "moderate",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Gurgaon",
            description:
              "A modern city with skyscrapers, malls, and corporate hubs.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645135/photo-1623495349319-e2e1c06efced_f0yygl.jpg",
          },
          {
            name: "Kurukshetra",
            description:
              "A historical city known for its association with the Mahabharata.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645238/photo-1727253112274-ca80addee55c_jwmidj.png",
          },
          {
            name: "Pinjore Gardens",
            description: "A beautiful Mughal-style garden near Chandigarh.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645348/photo-1585320806297-9794b3e4eeae_jqbudx.jpg",
          },
          {
            name: "Sultanpur National Park",
            description: "A paradise for bird watchers and nature lovers.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645446/photo-1598726668148-99946ef1cb42_xvnet4.jpg",
          },
          {
            name: "Brahma Sarovar",
            description:
              "A sacred water tank in Kurukshetra known for its spiritual significance.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645523/photo-1677691476198-b3d8683a2ed2_txenpq.jpg",
          },
        ],
      },
      {
        name: "Himachal Pradesh",
        tag: "HP",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "crowded",
        places: [
          {
            name: "Shimla",
            description:
              "The capital city known for its colonial architecture and scenic views.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645722/photo-1597074866923-dc0589150358_ib3fat.jpg",
          },
          {
            name: "Manali",
            description:
              "A popular hill station with adventure sports and picturesque landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645882/photo-1605649487212-47bdab064df7_eolnza.jpg",
          },
          {
            name: "Dharamshala",
            description: "Home to the Dalai Lama and a serene Tibetan culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742645942/photo-1622225074638-1d80c0388697_xuenoh.jpg",
          },
          {
            name: "Kullu",
            description:
              "A valley of gods known for its natural beauty and adventure activities.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742646031/photo-1592058879796-8378fba3961f_bfuhtj.jpg",
          },
          {
            name: "Spiti Valley",
            description:
              "A remote desert mountain valley known for its monasteries and landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742646123/photo-1617159156637-dfb8655c9f95_bqp8dg.jpg",
          },
        ],
      },
      {
        name: "Jharkhand",
        tag: "JH",
        cost: "low",
        safety: "risky",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Ranchi",
            description:
              "The capital city surrounded by waterfalls and lush greenery.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742646270/photo-1625387891389-a4b440ae958e_av6wlt.jpg",
          },
          {
            name: "Jamshedpur",
            description:
              "An industrial city known for its parks and steel industries.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742646383/photo-1590898635138-351dc41da307_rg2hdi.jpg",
          },
          {
            name: "Deoghar",
            description: "A spiritual town famous for the Baidyanath Temple.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742646469/photo-1533638446853-a05ab34984f9_byqv12.jpg",
          },
          {
            name: "Netarhat",
            description: "A hidden gem known as the 'Queen of Chotanagpur'.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647153/photo-1732846948164-881a1da5286f_p8fb06.jpg",
          },
          {
            name: "Betla National Park",
            description:
              "A wildlife sanctuary known for tigers and rich biodiversity.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647289/photo-1586618812060-54a6fedc132c_qkcjbc.jpg",
          },
        ],
      },
      {
        name: "Karnataka",
        tag: "KA",
        cost: "high",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Bangalore",
            description:
              "The capital city known as the Silicon Valley of India.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647431/photo-1596176530529-78163a4f7af2_rihj9r.jpg",
          },
          {
            name: "Mysore",
            description: "Famous for its palaces and Dasara festival.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647495/photo-1580294647332-8a399cd9ed45_rgtiry.jpg",
          },
          {
            name: "Hampi",
            description: "A UNESCO World Heritage Site with ancient ruins.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647560/photo-1616606484004-5ef3cc46e39d_fuifet.jpg",
          },
          {
            name: "Mangalore",
            description: "A coastal city known for its beaches and seafood.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647626/photo-1625315734512-2d033d7e2ac0_iaihjk.jpg",
          },
          {
            name: "Coorg",
            description:
              "A scenic hill station known for coffee plantations and waterfalls.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647680/photo-1592544858330-7ac10a0468e5_adgom9.jpg",
          },
        ],
      },
      {
        name: "Kerala",
        tag: "KL",
        cost: "medium",
        safety: "safe",
        type: "beaches",
        crowd: "moderate",
        places: [
          {
            name: "Kochi",
            description:
              "A port city known for its colonial history and culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647775/photo-1558013400-b724200f9c39_f63ngi.jpg",
          },
          {
            name: "Munnar",
            description: "A hill station famous for tea plantations.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647825/photo-1580818135730-ebd11086660b_yuqsgc.jpg",
          },
          {
            name: "Alleppey",
            description: "Known as the Venice of the East for its backwaters.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647882/photo-1586940740670-b11020f9128f_dreej8.jpg",
          },
          {
            name: "Trivandrum",
            description: "The capital city known for beaches and temples.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647927/photo-1614090699960-b4c81be49f3c_rf5soh.jpg",
          },
          {
            name: "Varkala",
            description:
              "A stunning beach town with cliffs and natural springs.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742647985/photo-1610817201767-793a9130ce07_tezysy.jpg",
          },
        ],
      },
      {
        name: "Madhya Pradesh",
        tag: "MP",
        cost: "low",
        safety: "safe",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Bhopal",
            description: "The city of lakes and the capital of Madhya Pradesh.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648076/photo-1588324631685-79f9ab5941e1_wuikvv.jpg",
          },
          {
            name: "Indore",
            description: "A foodie's paradise with rich history and culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648174/photo-1596829568009-bc436aac1b63_l2xyac.jpg",
          },
          {
            name: "Gwalior",
            description:
              "Known for its majestic fort and historical significance.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648226/photo-1578148771262-2969a5614d6b_xahju6.jpg",
          },
          {
            name: "Khajuraho",
            description: "Famous for its UNESCO-listed temples and sculptures.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648287/photo-1606298855672-3efb63017be8_ivrbrd.jpg",
          },
          {
            name: "Ujjain",
            description:
              "A spiritual city known for the Mahakaleshwar Jyotirlinga.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648356/photo-1658730557753-caf6bbc4a0bc_qvkthy.jpg",
          },
        ],
      },
      {
        name: "Maharashtra",
        tag: "MH",
        cost: "high",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Mumbai",
            description:
              "The financial capital of India and home to Bollywood.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648523/photo-1567157577867-05ccb1388e66_m1qieq.jpg",
          },
          {
            name: "Pune",
            description:
              "A city known for its educational institutions and culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648583/photo-1614716194506-ef3694ae131a_gjqom7.jpg",
          },
          {
            name: "Aurangabad",
            description: "Famous for the Ajanta and Ellora caves.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648643/photo-1626331915556-c4f817fbcc5d_szi6l9.jpg",
          },
          {
            name: "Nashik",
            description: "A major pilgrimage site and wine capital of India.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648704/photo-1533894321612-48ae6413b4d6_wjs8hw.jpg",
          },
          {
            name: "Lonavala",
            description: "A popular hill station known for its scenic beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648761/photo-1582041545006-a561d82524d9_bxcgjj.jpg",
          },
        ],
      },
      {
        name: "Manipur",
        tag: "MN",
        cost: "low",
        safety: "moderate",
        type: "mountains",
        crowd: "quiet",
        places: [
          {
            name: "Imphal",
            description:
              "The capital city known for Loktak Lake and Kangla Fort.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742648874/photo-1674722606403-51d785c416f6_n7kwhe.jpg",
          },
          {
            name: "Churachandpur",
            description:
              "A beautiful town with diverse cultures and landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649042/photo-1554039363-bb1ab89fc855_pscidw.jpg",
          },
          {
            name: "Ukhrul",
            description: "A scenic hill station known for Shirui Lily.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649109/photo-1501973931234-5ac2964cd94a_ec4uvh.jpg",
          },
          {
            name: "Bishnupur",
            description: "A town with ancient temples and rich heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649153/photo-1708706679975-6e54492f15bf_rjspqk.jpg",
          },
          {
            name: "Moreh",
            description: "A bustling border town and gateway to Myanmar.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649229/photo-1584897356466-858d9b6c53d1_fepg5m.jpg",
          },
        ],
      },
      {
        name: "Meghalaya",
        tag: "ML",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "moderate",
        places: [
          {
            name: "Shillong",
            description:
              "The capital city known as the 'Scotland of the East' with breathtaking landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649328/photo-1562676156-1f5d10e1be29_iadpvp.jpg",
          },
          {
            name: "Cherrapunji",
            description:
              "One of the wettest places on Earth, famous for its living root bridges.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649411/photo-1707219004247-0657a598a23d_v8laig.jpg",
          },
          {
            name: "Mawlynnong",
            description:
              "Asia's cleanest village, known for its cleanliness and natural beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649478/photo-1650874210673-88f05078fbbd_lxpumo.jpg",
          },
          {
            name: "Dawki",
            description:
              "Famous for its crystal-clear river and scenic boat rides.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649537/photo-1521437620269-f477f5437820_xcqdn9.jpg",
          },
          {
            name: "Nongriat",
            description:
              "Home to the famous Double-Decker Living Root Bridge and lush green trails.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649612/photo-1742494267580-e026d3737f65_ushhz7.jpg",
          },
        ],
      },
      {
        name: "Mizoram",
        tag: "MZ",
        cost: "low",
        safety: "safe",
        type: "mountains",
        crowd: "quiet",
        places: [
          {
            name: "Aizawl",
            description:
              "The capital city with mesmerizing landscapes and a rich cultural heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649831/photo-1649320790494-056d741d9981_qyemy6.jpg",
          },
          {
            name: "Lunglei",
            description:
              "A picturesque town offering breathtaking views and tranquility.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649916/photo-1640529209198-0c56ce522607_ohzoli.jpg",
          },
          {
            name: "Champhai",
            description: "Known for its vineyards and lush green landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742649987/photo-1741972584467-bceac8944ac0_ktwxzt.jpg",
          },
          {
            name: "Serchhip",
            description:
              "Famous for Vantawng Falls, the highest waterfall in Mizoram.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650076/photo-1432405972618-c60b0225b8f9_kubw9o.jpg",
          },
          {
            name: "Reiek",
            description:
              "A scenic hilltop offering panoramic views of the surrounding hills and valleys.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650153/photo-1640529209437-1d61c4f82cce_carj3d.jpg",
          },
        ],
      },
      {
        name: "Nagaland",
        tag: "NL",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "quiet",
        places: [
          {
            name: "Kohima",
            description:
              "The capital city, rich in history and cultural heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650300/photo-1585816763381-193ec2ed0735_j3yx3q.jpg",
          },
          {
            name: "Dimapur",
            description:
              "A bustling city known for its archaeological sites and vibrant markets.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650358/photo-1609601703501-7932f18b6920_s4u6kx.jpg",
          },
          {
            name: "Mokokchung",
            description:
              "A cultural hub of the Ao Naga tribe, surrounded by scenic hills.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650425/photo-1712055196088-9bc6da4ffbce_pzqucy.jpg",
          },
          {
            name: "Mon",
            description:
              "Famous for the Konyak tribe and their traditional tattoos.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650484/photo-1700040186780-18adbcc909b0_vy4dwa.jpg",
          },
          {
            name: "Wokha",
            description:
              "Known for its scenic landscapes, terraced fields, and vibrant Lotha Naga culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650541/photo-1692652567309-5ac9ae7fe6f7_x56nff.jpg",
          },
        ],
      },
      {
        name: "Odisha",
        tag: "OD",
        cost: "low",
        safety: "safe",
        type: "beaches",
        crowd: "crowded",
        places: [
          {
            name: "Bhubaneswar",
            description:
              "The capital city known as the 'Temple City of India'.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650626/photo-1603013552237-7d9a14a75464_bb7t5y.jpg",
          },
          {
            name: "Puri",
            description:
              "Famous for the Jagannath Temple and its golden beaches.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650686/photo-1588137769937-382684e3d7a8_qrheix.jpg",
          },
          {
            name: "Konark",
            description:
              "Home to the stunning Sun Temple, a UNESCO World Heritage Site.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650752/photo-1656000599453-b33750b7e094_wwnnzv.jpg",
          },
          {
            name: "Chilika Lake",
            description:
              "Asia’s largest coastal lagoon, known for birdwatching and dolphin sightings.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650887/photo-1583134992904-79df1455b623_zf0pbv.jpg",
          },
          {
            name: "Cuttack",
            description:
              "An ancient city known for its historic Barabati Fort and vibrant silver filigree work.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742650974/photo-1651835457052-d7cbfa875a7b_jnypzh.jpg",
          },
        ],
      },
      {
        name: "Punjab",
        tag: "PB",
        cost: "medium",
        safety: "risky",
        type: "city",
        crowd: "moderate",
        places: [
          {
            name: "Amritsar",
            description:
              "Home to the Golden Temple, a major pilgrimage site for Sikhs.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651168/photo-1583821017783-4333717df070_rrdow5.jpg",
          },
          {
            name: "Chandigarh",
            description:
              "A planned city with beautiful gardens and modern architecture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651252/photo-1589350033409-35701c4273d0_vg6mdn.jpg",
          },
          {
            name: "Ludhiana",
            description:
              "An industrial city known for its textiles and manufacturing.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651391/photo-1535950377798-a33c56f5dd35_v1ubcy.jpg",
          },
          {
            name: "Jalandhar",
            description:
              "A historical city with rich cultural heritage and sports industries.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651501/photo-1537985961236-980bc462ff8a_cbwmdh.jpg",
          },
          {
            name: "Pathankot",
            description:
              "Famous for its royal heritage, palaces and traditional Punjabi culture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651598/photo-1688313841040-1e168f5eef6f_wz45xe.jpg",
          },
        ],
      },
      {
        name: "Rajasthan",
        tag: "RJ",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Jaipur",
            description:
              "The Pink City known for its historic forts and palaces.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651892/photo-1603262110263-fb0112e7cc33_cnqtum.jpg",
          },
          {
            name: "Udaipur",
            description:
              "The City of Lakes, famous for its scenic beauty and royal heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742651956/photo-1615836245337-f5b9b2303f10_nvqdna.jpg",
          },
          {
            name: "Jaisalmer",
            description:
              "A desert city with magnificent forts and camel safaris.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652027/photo-1577089907583-991f1ba4a03c_pstg2t.jpg",
          },
          {
            name: "Pushkar",
            description:
              "A holy town known for its annual camel fair and Brahma Temple.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652088/photo-1586176182329-f901b80d3bd0_febxxo.jpg",
          },
          {
            name: "Jodhpur",
            description:
              "The Blue City, known for its stunning Mehrangarh Fort and vibrant markets.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652178/photo-1566873535350-a3f5d4a804b7_qsffcv.jpg",
          },
        ],
      },
      {
        name: "Sikkim",
        tag: "SK",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "quiet",
        places: [
          {
            name: "Gangtok",
            description:
              "The capital city offering breathtaking views of the Himalayas.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652339/photo-1532363741232-e4c99c0e83ea_xtwjqt.jpg",
          },
          {
            name: "Pelling",
            description:
              "A serene town with monasteries and spectacular landscapes.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652404/photo-1724600459474-e2a7bd45dede_z1po7l.jpg",
          },
          {
            name: "Lachung",
            description:
              "A picturesque village known for its stunning waterfalls and valleys.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652488/photo-1674922049190-f631ba5bc44f_umdeok.jpg",
          },
          {
            name: "Namchi",
            description:
              "A spiritual town with Buddhist monasteries and scenic beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652553/photo-1738474570473-6b693c062171_ouguno.jpg",
          },
          {
            name: "Yuksom",
            description:
              "A historic town and the gateway to Kanchenjunga National Park.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652624/photo-1634308670152-17f7f1aa4e79_n1bzqk.jpg",
          },
        ],
      },
      {
        name: "Tamil Nadu",
        tag: "TN",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Chennai",
            description:
              "The capital city with beaches, temples, and colonial heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652779/photo-1585999322539-fee6e6321a39_anzx7g.jpg",
          },
          {
            name: "Madurai",
            description: "A historic city famous for the Meenakshi Temple.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742652872/premium_photo-1697729593611-3b6f014a5534_mjoi9h.jpg",
          },
          {
            name: "Ooty",
            description:
              "A popular hill station with lush greenery and pleasant climate.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653007/photo-1559147861-32715680aef8_yjp0im.jpg",
          },
          {
            name: "Kanyakumari",
            description:
              "The southernmost point of India known for its scenic sunrise and sunset views.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653066/photo-1527705381526-469031509a9d_zd95s9.jpg",
          },
          {
            name: "Coimbatore",
            description:
              "An industrial city known for its pleasant climate and nearby hill stations.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653130/photo-1616990727575-2d0d664eb1de_uzii9n.jpg",
          },
        ],
      },
      {
        name: "Telangana",
        tag: "TS",
        cost: "medium",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Hyderabad",
            description:
              "The City of Pearls, famous for its rich history and cuisine.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653211/photo-1470075446540-4391a96ec621_xi44vw.jpg",
          },
          {
            name: "Warangal",
            description: "A city known for its ancient forts and temples.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653276/photo-1714931149787-803cde05f313_nz2pgn.jpg",
          },
          {
            name: "Nagarjuna Sagar",
            description:
              "A scenic location with a massive dam and Buddhist heritage.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653365/photo-1630764942866-c353453d927a_u6kxjy.jpg",
          },
          {
            name: "Bhadrachalam",
            description:
              "A religious town known for its famous temple dedicated to Lord Rama.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653442/photo-1709389137226-f94058d3cbe7_pw0jdn.jpg",
          },
          {
            name: "Karimnagar",
            description:
              "A city known for its historical sites, lakes and ancient temples.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742653577/photo-1595234404623-250bf6c9474c_ruu079.jpg",
          },
        ],
      },
      {
        name: "Tripura",
        tag: "TR",
        cost: "low",
        safety: "safe",
        type: "city",
        crowd: "quiet",
        places: [
          {
            name: "Agartala",
            description:
              "The capital city with palaces, temples, and natural beauty.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742655734/photo-1652926725072-b5131bed5d1f_kbjz8z.jpg",
          },
          {
            name: "Unakoti",
            description:
              "A unique rock-cut pilgrimage site with ancient carvings.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742655790/photo-1695150854909-a00039a284b8_cfiuoz.jpg",
          },
          {
            name: "Neermahal",
            description:
              "A magnificent lake palace blending Hindu and Muslim architecture.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742655874/photo-1652926372175-87e30082db4c_fx8vve.jpg",
          },
          {
            name: "Jampui Hills",
            description:
              "A scenic hill range offering panoramic views and orange plantations.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742655936/photo-1669744665015-33f3a2f657b3_e3kpdr.jpg",
          },
          {
            name: "Dharmanagar",
            description:
              "A major city known for its cultural heritage and historical significance.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656122/photo-1575569795407-0d54ebdbf069_r10kzs.jpg",
          },
        ],
      },
      {
        name: "Uttar Pradesh",
        tag: "UP",
        cost: "low",
        safety: "risky",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Agra",
            description:
              "Home to the iconic Taj Mahal, a UNESCO World Heritage Site.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656222/photo-1564507592333-c60657eea523_muqoru.jpg",
          },
          {
            name: "Varanasi",
            description:
              "A spiritual city known for its ghats and temples on the Ganges.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656286/photo-1571536802807-30451e3955d8_ce2a84.jpg",
          },
          {
            name: "Lucknow",
            description:
              "The City of Nawabs, known for its heritage and cuisine.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656345/photo-1547716467-fdb9102f1ac4_mrnb96.jpg",
          },
          {
            name: "Mathura",
            description:
              "A holy city believed to be the birthplace of Lord Krishna.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656420/photo-1616787671803-e660b92c0d25_sn6tms.jpg",
          },
          {
            name: "Kanpur",
            description:
              "An industrial city famous for leather goods and historical sites.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656496/photo-1625751950109-394d683833d0_fuyxc4.jpg",
          },
        ],
      },
      {
        name: "Uttarakhand",
        tag: "UK",
        cost: "medium",
        safety: "safe",
        type: "mountains",
        crowd: "moderate",
        places: [
          {
            name: "Dehradun",
            description:
              "The capital city known for its scenic beauty and education hubs.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656588/photo-1606586593596-5308e16d0a48_kuyz8j.jpg",
          },
          {
            name: "Mussoorie",
            description: "A famous hill station with breathtaking views.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656676/photo-1583143874828-de3d288be51a_cvznuw.jpg",
          },
          {
            name: "Nainital",
            description:
              "A picturesque town with a beautiful lake and mountains.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656740/photo-1610715936287-6c2ad208cdbf_djidzq.jpg",
          },
          {
            name: "Rishikesh",
            description: "A spiritual and adventure hub along the Ganges.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656807/photo-1607406374368-809f8ec7f118_qrcslt.jpg",
          },
          {
            name: "Haridwar",
            description:
              "A sacred city famous for the Ganga Aarti at Har Ki Pauri.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742656910/photo-1588750765220-50603c3c0c7a_lzeeyv.jpg",
          },
        ],
      },
      {
        name: "West Bengal",
        tag: "WB",
        cost: "low",
        safety: "safe",
        type: "city",
        crowd: "crowded",
        places: [
          {
            name: "Kolkata",
            description:
              "The cultural capital of India, known for its heritage and street food.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742657009/photo-1558431382-27e303142255_eoy60d.jpg",
          },
          {
            name: "Darjeeling",
            description:
              "A scenic hill station famous for its tea gardens and toy train.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742657094/photo-1549817997-f6958ecf47b9_v1gnva.jpg",
          },
          {
            name: "Sundarbans",
            description:
              "A UNESCO World Heritage site, home to the Royal Bengal Tiger.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742657145/photo-1549300461-11c5b94e8855_i8llx1.jpg",
          },
          {
            name: "Digha",
            description: "A popular beach town known for its serene coastline.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742657199/photo-1559671888-af88d0c275bd_hixyfw.jpg",
          },
          {
            name: "Shantiniketan",
            description:
              "A cultural and educational hub founded by Rabindranath Tagore.",
            src: "https://res.cloudinary.com/dh5qtpfs7/image/upload/v1742657283/photo-1614263488703-309604631472_v8yud6.jpg",
          },
        ],
      },
    ],
  };
  res.status(200).json(data);
}
