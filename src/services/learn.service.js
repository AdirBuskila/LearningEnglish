import { utilService } from './util.service';
import animalsBg from '../assets/img/animals-bg.jpg';
import numbersBg from '../assets/img/numbers-bg.png';
import grammarBg from '../assets/img/grammar-bg.jpg';
import colorsBg from '../assets/img/colors-bg.png';
import countriesBg from '../assets/img/countries-bg.jpg';
import spaceBg from '../assets/img/space-bg.png';
import foodBg from '../assets/img/food-bg.jpg';
import fruAndVegBg from '../assets/img/fruits-veggies.png';

const animals = {
  type: 'animals',
  img: animalsBg,
  code: 'anml',
  tests: [
    [
      {
        _id: 'anml-0',
        ques: "What's the name of the animal?",
        answer: 'dog',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978284/English/animals/foz0mujfe9itqgq9uz3p.jpg',
      },
      {
        _id: 'anml-1',
        ques: "What's the name of the animal?",
        answer: 'tiger',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978291/English/animals/yeeqfevhjtuomczfulsq.jpg',
      },
      {
        _id: 'anml-2',
        ques: "What's the name of the animal?",
        answer: 'lion',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978287/English/animals/iswdhcwkleqvkq2nh2ii.jpg',
      },
      {
        _id: 'anml-3',
        ques: "What's the name of the animal?",
        answer: 'fish',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978285/English/animals/yr9c3vb5bgdvmgddracp.jpg',
      },
      {
        _id: 'anml-4',
        ques: "What's the name of the animal?",
        answer: 'cat',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978293/English/animals/b9exxwly2lp0fnrkkkln.jpg',
      },
    ],
    [
      {
        _id: 'anml-5',
        ques: "What's the name of the animal?",
        answer: 'bird',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978299/English/animals/gkzuahfjuxoe90hrfwiq.png',
      },
      {
        _id: 'anml-6',
        ques: "What's the name of the animal?",
        answer: 'snake',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978381/English/animals/y7ummtbh7bau87ooimvq.jpg',
      },
      {
        _id: 'anml-7',
        ques: "What's the name of the animal?",
        answer: 'elephant',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978289/English/animals/waove4ssabqrbegmyy5x.jpg',
      },
      {
        _id: 'anml-8',
        ques: "What's the name of the animal?",
        answer: 'whale',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978292/English/animals/kvk6bcx0aylv6m8uyldm.jpg',
      },
      {
        _id: 'anml-9',
        ques: "What's the name of the animal?",
        answer: 'hamster',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978286/English/animals/ph34ykcpms9rvo5hfyfn.jpg',
      },
    ],
    [
      {
        _id: 'anml-10',
        ques: "What's the name of the animal?",
        answer: 'zebra',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978363/English/animals/vyt4ioaacclbmacfozmk.jpg',
      },
      {
        _id: 'anml-11',
        ques: "What's the name of the animal?",
        answer: 'bat',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978338/English/animals/ihcrbzkmliyaqota99xx.jpg',
      },
      {
        _id: 'anml-12',
        ques: "What's the name of the animal?",
        answer: 'bee',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978366/English/animals/rfsxbhfaakww41ztuoqa.jpg',
      },
      {
        _id: 'anml-13',
        ques: "What's the name of the animal?",
        answer: 'bear',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978365/English/animals/vpojlhflxvrgq20bmv38.jpg',
      },
      {
        _id: 'anml-14',
        ques: "What's the name of the animal?",
        answer: 'giraffe',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978371/English/animals/dtpskxdijzcre7l4p3ps.jpg',
      },
    ],
    [
      {
        _id: 'anml-15',
        ques: "What's the name of the animal?",
        answer: 'hippo',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978373/English/animals/bbsaktrgfcaizey89atq.png',
      },
      {
        _id: 'anml-16',
        ques: "What's the name of the animal?",
        answer: 'kangaroo',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978373/English/animals/jh697k4kz0g0kqicxbev.jpg',
      },
      {
        _id: 'anml-17',
        ques: "What's the name of the animal?",
        answer: 'monkey',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978374/English/animals/gqhw3otlkix8dav0tg9t.jpg',
      },
      {
        _id: 'anml-18',
        ques: "What's the name of the animal?",
        answer: 'mouse',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978376/English/animals/tsrp8a1gehbunipjvjfq.png',
      },
      {
        _id: 'anml-19',
        ques: "What's the name of the animal?",
        answer: 'owl',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978376/English/animals/lyisoj16hc9chiomtie4.jpg',
      },
    ],
    [
      {
        _id: 'anml-20',
        ques: "What's the name of the animal?",
        answer: 'parrot',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978377/English/animals/vqeqfcnkhdnzrlje6xts.jpg',
      },
      {
        _id: 'anml-21',
        ques: "What's the name of the animal?",
        answer: 'penguin',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978378/English/animals/qdykm2huaykgkhwuumpm.jpg',
      },
      {
        _id: 'anml-22',
        ques: "What's the name of the animal?",
        answer: 'spider',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978382/English/animals/pn0pebwemgcoqgd9rjzb.jpg',
      },
      {
        _id: 'anml-23',
        ques: "What's the name of the animal?",
        answer: 'squid',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978383/English/animals/lbmfmmephotbvchu9kph.jpg',
      },
      {
        _id: 'anml-24',
        ques: "What's the name of the animal?",
        answer: 'sloth',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978381/English/animals/lsof6f2fycoyqqr8nhdh.jpg',
      },
    ],
    [
      {
        _id: 'anml-25',
        ques: "What's the name of the animal?",
        answer: 'deer',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978369/English/animals/pyeh1ovzpzszt85uvodt.png',
      },
      {
        _id: 'anml-26',
        ques: "What's the name of the animal?",
        answer: 'cow',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978367/English/animals/hsub7eiuli977lpuerrt.jpg',
      },
      {
        _id: 'anml-27',
        ques: "What's the name of the animal?",
        answer: 'crab',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978370/English/animals/xfytnxa6yxwoz0b4whrv.png',
      },
      {
        _id: 'anml-28',
        ques: "What's the name of the animal?",
        answer: 'squirrel',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978364/English/animals/dnnypu4f1pevacomratw.jpg',
      },
      {
        _id: 'anml-29',
        ques: "What's the name of the animal?",
        answer: 'rhino',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978381/English/animals/slyakoj0mryko2swm9yj.png',
      },
    ],
    [
      {
        _id: 'anml-30',
        ques: "What's the name of the animal?",
        answer: 'ostrich',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978386/English/animals/hv6p2mfftarh6uxc2bj6.png',
      },
      {
        _id: 'anml-31',
        ques: "What's the name of the animal?",
        answer: 'wolf',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652979416/English/animals/trg7jycxrezyhdspx3le.jpg',
      },
      {
        _id: 'anml-32',
        ques: "What's the name of the animal?",
        answer: 'seal',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652979367/English/animals/klxb4x3arsxuznhkdhkh.jpg',
      },
      {
        _id: 'anml-33',
        ques: "What's the name of the animal?",
        answer: 'camel',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652979341/English/animals/odjap0wvgbob1sff6e64.jpg',
      },
      {
        _id: 'anml-34',
        ques: "What's the name of the animal?",
        answer: 'sheep',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652979303/English/animals/yft2rcpmm9qhlow3pni5.jpg',
      },
    ],
  ],
};
const colors = {
  type: 'colors',
  img: colorsBg,
  code: 'color',
  tests: [
    [
      {
        _id: 'color-0',
        ques: 'Name of the color?',
        answer: 'red',
        color: '#FF4949',
      },
      {
        _id: 'color-1',
        ques: 'Name of the color?',
        answer: 'blue',
        color: '#2155CD',
      },
      {
        _id: 'color-2',
        ques: 'Name of the color?',
        answer: 'green',
        color: '#6BCB77',
      },
      {
        _id: 'color-3',
        ques: 'Name of the color?',
        answer: 'white',
        color: '#FFFFFF',
      },
      {
        _id: 'color-4',
        ques: 'Name of the color?',
        answer: 'yellow',
        color: '#F9D923',
      },
    ],
    [
      {
        _id: 'color-5',
        ques: 'Name of the color?',
        answer: 'orange',
        color: '#F66B0E',
      },
      {
        _id: 'color-6',
        ques: 'Name of the color?',
        answer: 'purple',
        color: '#8A39E1',
      },
      {
        _id: 'color-7',
        ques: 'Name of the color?',
        answer: 'black',
        color: '#2C3333',
      },
      {
        _id: 'color-8',
        ques: 'Name of the color?',
        answer: 'grey',
        color: '#D1D1D1',
      },
      {
        _id: 'color-9',
        ques: 'Name of the color?',
        answer: 'pink',
        color: '#F806CC',
      },
    ],
    [
      {
        _id: 'color-10',
        ques: 'Name of the color?',
        answer: 'brown',
        color: '#603601',
      },
      {
        _id: 'color-11',
        ques: 'Name of the color?',
        answer: 'cyan',
        color: '#40DFEF',
      },
    ],
  ],
};
const countries = {
  type: 'countries',
  img: countriesBg,
  code: 'coun',
  tests: [
    [
      {
        _id: 'coun-0',
        ques: 'Name of the country?',
        answer: 'israel',
        img: 'https://flagcdn.com/il.svg',
      },
      {
        _id: 'coun-1',
        ques: 'Name of the country?',
        answer: 'spain',
        img: 'https://flagcdn.com/es.svg',
      },
      {
        _id: 'coun-2',
        ques: 'Name of the country?',
        answer: 'brazil',
        img: 'https://flagcdn.com/br.svg',
      },
      {
        _id: 'coun-3',
        ques: 'Name of the country?',
        answer: 'egypt',
        img: 'https://flagcdn.com/eg.svg',
      },
      {
        _id: 'coun-4',
        ques: 'Name of the country?',
        answer: 'france',
        img: 'https://flagcdn.com/fr.svg',
      },
    ],
    [
      {
        _id: 'coun-5',
        ques: 'Name of the country?',
        answer: 'italy',
        img: 'https://flagcdn.com/it.svg',
      },
      {
        _id: 'coun-6',
        ques: 'Name of the country?',
        answer: 'japan',
        img: 'https://flagcdn.com/jp.svg',
      },
      {
        _id: 'coun-7',
        ques: 'Name of the country?',
        answer: 'mexico',
        img: 'https://flagcdn.com/mx.svg',
      },
      {
        _id: 'coun-8',
        ques: 'Name of the country?',
        answer: 'poland',
        img: 'https://flagcdn.com/pl.svg',
      },
      {
        _id: 'coun-9',
        ques: 'Name of the country?',
        answer: 'china',
        img: 'https://flagcdn.com/cn.svg',
      },
    ],
    [
      {
        _id: 'coun-10',
        ques: 'Name of the country?',
        answer: 'colombia',
        img: 'https://flagcdn.com/co.svg',
      },
      {
        _id: 'coun-11',
        ques: 'Name of the country?',
        answer: 'greece',
        img: 'https://flagcdn.com/gr.svg',
      },
      {
        _id: 'coun-12',
        ques: 'Name of the country?',
        answer: 'morocco',
        img: 'https://flagcdn.com/ma.svg',
      },
      {
        _id: 'coun-13',
        ques: 'Name of the country?',
        answer: 'norway',
        img: 'https://flagcdn.com/no.svg',
      },
      {
        _id: 'coun-14',
        ques: 'Name of the country?',
        answer: 'united states of america',
        img: 'https://flagcdn.com/us.svg',
      },
    ],
  ],
};
const practice = {
  type: 'practice',
  background: 'linear-gradient(to top left, #39b385, #9be15d)',
  code: 'prac',
  tests: [
    [
      {
        _id: 'prac-0',
        ques: 'How am I called?',
        answer: 'hospital',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729858/English/objects/ptx8sl4hvx0yphw66agj.png',
      },
      {
        _id: 'prac-1',
        ques: 'How am I called?',
        answer: 'museum',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729862/English/objects/k5buj4ujvc2iwn3badht.png',
      },
      {
        _id: 'prac-2',
        ques: 'How am I called?',
        answer: 'theater',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729867/English/objects/uyu0hbgv0snw1rj0iwx1.png',
      },
      {
        _id: 'prac-3',
        ques: 'How am I called?',
        answer: 'market',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729861/English/objects/yhwvqt5o6d9mpbfxi05p.png',
      },
      {
        _id: 'prac-4',
        ques: 'How am I called?',
        answer: 'town',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729870/English/objects/n7quumfggvdnrpl181wr.png',
      },
    ],
    [
      {
        _id: 'prac-5',
        ques: 'How am I called?',
        answer: 'restaurant',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729865/English/objects/tni0i9dtedcfhfiws2hf.png',
      },
      {
        _id: 'prac-6',
        ques: 'How am I called?',
        answer: 'hotel',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729865/English/objects/eli14fpvzjfsbmwktzeg.png',
      },
      {
        _id: 'prac-7',
        ques: 'How am I called?',
        answer: 'fire station',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729855/English/objects/vj2jwkycvnjqrq1w8pbq.png',
      },
      {
        _id: 'prac-8',
        ques: 'How am I called?',
        answer: 'police station',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729864/English/objects/jhy4utmzpkoxggxjht5y.png',
      },
      {
        _id: 'prac-9',
        ques: 'How am I called?',
        answer: 'bus station',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729853/English/objects/ow878bii5nlk0o5dbfqx.png',
      },
    ],
    [
      {
        _id: 'prac-10',
        ques: 'How am I called?',
        answer: 'shop',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729862/English/objects/aboi1upztbfgfwtayatj.png',
      },
      {
        _id: 'prac-11',
        ques: 'How am I called?',
        answer: 'home',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729858/English/objects/jljaouxiutz47fqo0hj5.png',
      },
      {
        _id: 'prac-12',
        ques: 'How am I called?',
        answer: 'electricity',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729859/English/objects/yed6zdoovyfwqdu8qzx4.png',
      },
      {
        _id: 'prac-13',
        ques: 'How am I called?',
        answer: 'apartment',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729852/English/objects/rqnnhboylldz5q9wgadh.png',
      },
      {
        _id: 'prac-14',
        ques: 'How am I called?',
        answer: 'sofa',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729865/English/objects/z26qw25bl7oayvfczx1b.png',
      },
    ],
    [
      {
        _id: 'prac-15',
        ques: 'How am I called?',
        answer: 'water',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729867/English/objects/ybohpyljeqwrtnnj5bi4.png',
      },
      {
        _id: 'prac-16',
        ques: 'How am I called?',
        answer: 'kitchen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729864/English/objects/fmoupdliv94daydnhfrs.png',
      },
      {
        _id: 'prac-17',
        ques: 'How am I called?',
        answer: 'watch',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729867/English/objects/ex179qdpamvdhnvkgptb.png',
      },
      {
        _id: 'prac-18',
        ques: 'How am I called?',
        answer: 'dining room',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729855/English/objects/lwckmuox4qyb1ndvcogx.png',
      },
      {
        _id: 'prac-19',
        ques: 'How am I called?',
        answer: 'bedroom',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729853/English/objects/covo2jvjhrgefpytenb0.png',
      },
    ],
    [
      {
        _id: 'prac-20',
        ques: 'How am I called?',
        answer: 'living room',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729859/English/objects/ccqzxps9xyclaeejlurs.png',
      },
      {
        _id: 'prac-21',
        ques: 'How am I called?',
        answer: 'bathroom',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729855/English/objects/zi3yw0nkll6tw0vgagmn.png',
      },
      {
        _id: 'prac-22',
        ques: 'How am I called?',
        answer: 'toilet',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729867/English/objects/hzmmussobcl45npipmjf.png',
      },
      {
        _id: 'prac-23',
        ques: 'How am I called?',
        answer: 'garden',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729856/English/objects/mikktgbgpyehrsoihzdb.png',
      },
      {
        _id: 'prac-24',
        ques: 'How am I called?',
        answer: 'gas',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729858/English/objects/i6oedykjtienesp2ithk.png',
      },
    ],
    [
      {
        _id: 'prac-25',
        ques: 'How am I called?',
        answer: 'computer',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729855/English/objects/jqspxzezratlaqgx1d2q.png',
      },
      {
        _id: 'prac-26',
        ques: 'How am I called?',
        answer: 'lamp',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729860/English/objects/ldqnrcodpjscvm6xyemh.png',
      },
      {
        _id: 'prac-27',
        ques: 'How am I called?',
        answer: 'rug',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729863/English/objects/glzklv5n8pqobryjlptj.png',
      },
      {
        _id: 'prac-28',
        ques: 'How am I called?',
        answer: 'drink',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729858/English/objects/dtpwvdzjgt4qw23khbpy.png',
      },
      {
        _id: 'prac-29',
        ques: 'How am I called?',
        answer: 'sleep',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729864/English/objects/auvbnbphbk7xihmnuxcj.png',
      },
    ],
    [
      {
        _id: 'prac-30',
        ques: 'How am I called?',
        answer: 'walk',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729867/English/objects/n0indsur4inswu6lwmbx.png',
      },
      {
        _id: 'prac-31',
        ques: 'How am I called?',
        answer: 'cook',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729854/English/objects/j9vod3vwtqr7u9nuhnna.png',
      },
      {
        _id: 'prac-32',
        ques: 'How am I called?',
        answer: 'climb',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729853/English/objects/qtg0yzbfcj3fhgg8utiq.png',
      },
      {
        _id: 'prac-33',
        ques: 'How am I called?',
        answer: 'swim',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729865/English/objects/jevcrpgjgwbrtoce85db.png',
      },
      {
        _id: 'prac-34',
        ques: 'How am I called?',
        answer: 'remember',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729862/English/objects/zwjxwlzgtfykwcuibjty.png',
      },
    ],
    [
      {
        _id: 'prac-35',
        ques: 'How am I called?',
        answer: 'fly',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729857/English/objects/rrljunrrdnpnjjzlrpjd.png',
      },
      {
        _id: 'prac-36',
        ques: 'How am I called?',
        answer: 'know',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729860/English/objects/t8pehve6c0zuqzsngugx.png',
      },
      {
        _id: 'prac-37',
        ques: 'How am I called?',
        answer: 'come in',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729855/English/objects/igx3se02ffegziu9mwgx.png',
      },
      {
        _id: 'prac-38',
        ques: 'How am I called?',
        answer: 'work',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652729868/English/objects/mo3ktw3tcwnfrttiozdr.png',
      },
      {
        _id: 'prac-39',
        ques: 'How am I called?',
        answer: 'build',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977499/English/objects/ulqrfrd5pakcllji0sfr.png',
      },
    ],
    [
      {
        _id: 'prac-40',
        ques: 'How am I called?',
        answer: 'throw',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652978063/English/objects/cpoc2hk0sbpzpeih9bv5.png',
      },
      {
        _id: 'prac-41',
        ques: 'How am I called?',
        answer: 'cut',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977415/English/objects/jr0i5za3lfwvmw8ila9i.png',
      },
      {
        _id: 'prac-42',
        ques: 'How am I called?',
        answer: 'clean',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977415/English/objects/xy17w85hqjfpihxxpgg9.png',
      },
      {
        _id: 'prac-43',
        ques: 'How am I called?',
        answer: 'feed',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977418/English/objects/wz65xzrla8yxejt4hyf4.png',
      },
      {
        _id: 'prac-44',
        ques: 'How am I called?',
        answer: 'eat',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977418/English/objects/xcomx6xzbutzq7it8akg.png',
      },
    ],
    [
      {
        _id: 'prac-45',
        ques: 'How am I called?',
        answer: 'cucumber',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977418/English/objects/eakxraffjx2xhjcaoevs.png',
      },
      {
        _id: 'prac-46',
        ques: 'How am I called?',
        answer: 'egg',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977417/English/objects/wimvco1y7uturvtno4em.png',
      },
      {
        _id: 'prac-47',
        ques: 'How am I called?',
        answer: 'cookie',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977418/English/objects/cmnjo8aljszrh8xr1wo5.png',
      },
      {
        _id: 'prac-48',
        ques: 'How am I called?',
        answer: 'tea',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977419/English/objects/uv2pbq09wvdy85i3htbs.png',
      },
      {
        _id: 'prac-49',
        ques: 'How am I called?',
        answer: 'pie',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977419/English/objects/gtg4tgqiknozfwjorewx.png',
      },
    ],
    [
      {
        _id: 'prac-50',
        ques: 'How am I called?',
        answer: 'hot dog',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977431/English/objects/nmeek87ired1ickzq8vi.png',
      },
      {
        _id: 'prac-51',
        ques: 'How am I called?',
        answer: 'cereal',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977422/English/objects/fxoli3hiem3cfxdr50ao.png',
      },
      {
        _id: 'prac-52',
        ques: 'How am I called?',
        answer: 'onion',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977421/English/objects/bgaty195hkdr0fjevwom.png',
      },
      {
        _id: 'prac-53',
        ques: 'How am I called?',
        answer: 'coffee',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977424/English/objects/rovesfjc07kt5wzt4xwh.png',
      },
      {
        _id: 'prac-54',
        ques: 'How am I called?',
        answer: 'plum',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977421/English/objects/x5skqkvfbpnc0nbgsbmi.png',
      },
    ],
    [
      {
        _id: 'prac-55',
        ques: 'How am I called?',
        answer: 'candy',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977423/English/objects/kbgi8cqwefp2g2ttsbrn.png',
      },
      {
        _id: 'prac-56',
        ques: 'How am I called?',
        answer: 'potato',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977421/English/objects/weqsfc5wkxpx9c06qhie.png',
      },
      {
        _id: 'prac-57',
        ques: 'How am I called?',
        answer: 'peach',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977424/English/objects/fe19i1yvz6rjvodzkaqs.png',
      },
      {
        _id: 'prac-58',
        ques: 'How am I called?',
        answer: 'pepper',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977424/English/objects/fe7vyf7aypuj3ytu9wgv.png',
      },
      {
        _id: 'prac-59',
        ques: 'How am I called?',
        answer: 'cheese',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977425/English/objects/dcwzg54lffa0ezcde24n.png',
      },
    ],
    [
      {
        _id: 'prac-60',
        ques: 'How am I called?',
        answer: 'tomato',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977425/English/objects/qfkuby8ijw0ikj5nz030.png',
      },
      {
        _id: 'prac-61',
        ques: 'How am I called?',
        answer: 'apple',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977425/English/objects/esd34kmhszuyp1eqxzui.png',
      },
      {
        _id: 'prac-62',
        ques: 'How am I called?',
        answer: 'lettuce',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977430/English/objects/dnxn46jyfkh0obkre5ul.png',
      },
      {
        _id: 'prac-63',
        ques: 'How am I called?',
        answer: 'bread',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977428/English/objects/dh8sbwan4xcucuj28oxq.png',
      },
      {
        _id: 'prac-64',
        ques: 'How am I called?',
        answer: 'morning',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977428/English/objects/jqefjfeockmi4tyeyzr4.png',
      },
    ],
    [
      {
        _id: 'prac-65',
        ques: 'How am I called?',
        answer: 'afternoon',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977429/English/objects/va8ea5ldqyhczspt9pw8.png',
      },
      {
        _id: 'prac-66',
        ques: 'How am I called?',
        answer: 'evening',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977446/English/objects/exuld7wbgvdtjn5ywsot.png',
      },
      {
        _id: 'prac-67',
        ques: 'How am I called?',
        answer: 'night',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977429/English/objects/zbzwl5uqpywix2lathyk.png',
      },
      {
        _id: 'prac-68',
        ques: 'How am I called?',
        answer: 'month',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977430/English/objects/y7alod3dbma5jr3dxr0u.png',
      },
      {
        _id: 'prac-69',
        ques: 'How am I called?',
        answer: 'week',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977430/English/objects/jexnnjnphum3sufvjlyp.webp',
      },
    ],
    [
      {
        _id: 'prac-70',
        ques: 'How am I called?',
        answer: 'year',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977431/English/objects/f776wfqg9t527tpizrx9.png',
      },
      {
        _id: 'prac-71',
        ques: 'How am I called?',
        answer: 'summer',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977434/English/objects/lw0dhmerceqvzfy6ymxy.png',
      },
      {
        _id: 'prac-72',
        ques: 'How am I called?',
        answer: 'winter',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977432/English/objects/pf6o2uhl5kw5h4moicr0.png',
      },
      {
        _id: 'prac-73',
        ques: 'How am I called?',
        answer: 'spring',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977439/English/objects/kblaeh5dtlz3fyatdczg.png',
      },
      {
        _id: 'prac-74',
        ques: 'How am I called?',
        answer: 'autumn',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977434/English/objects/zjoezlxgudwq9sehrmoh.png',
      },
    ],
    [
      {
        _id: 'prac-75',
        ques: 'How am I called?',
        answer: 'waiter',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977423/English/objects/kpztrfsjn3qum5iubn6w.png',
      },

      {
        _id: 'prac-76',
        ques: 'How am I called?',
        answer: 'young',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977438/English/objects/da5bk3fkxejmfm6zdpq8.png',
      },
      {
        _id: 'prac-77',
        ques: 'How am I called?',
        answer: 'old',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977446/English/objects/v9pe0mn7ivasilisq1xc.png',
      },
      {
        _id: 'prac-78',
        ques: 'How am I called?',
        answer: 'beautiful',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977435/English/objects/sj0023fuzywjulj9zl8t.png',
      },
      {
        _id: 'prac-79',
        ques: 'How am I called?',
        answer: 'ugly',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977437/English/objects/mwl4faeiqqhoyse5aswk.png',
      },
    ],
    [
      {
        _id: 'prac-80',
        ques: 'How am I called?',
        answer: 'poor',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977437/English/objects/gfpfoj7bfxgeovqvinzv.png',
      },
      {
        _id: 'prac-81',
        ques: 'How am I called?',
        answer: 'rich',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977439/English/objects/wfboqib7glmjthh6zenb.png',
      },
      {
        _id: 'prac-82',
        ques: 'How am I called?',
        answer: 'warm',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977438/English/objects/twjwxryxk5vj6a8dwned.png',
      },
      {
        _id: 'prac-83',
        ques: 'How am I called?',
        answer: 'cool',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977440/English/objects/b6irwzw9pr3benimmf4n.png',
      },
      {
        _id: 'prac-84',
        ques: 'How am I called?',
        answer: 'clean',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977441/English/objects/rwe5f1q2vbhkviy3wtgr.png',
      },
    ],
    [
      {
        _id: 'prac-85',
        ques: 'How am I called?',
        answer: 'dirty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977444/English/objects/jf7nwz3pu7woyxkj4maj.png',
      },
      {
        _id: 'prac-86',
        ques: 'How am I called?',
        answer: 'family',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977441/English/objects/cncgromkdlt1lrmvby5x.png',
      },
      {
        _id: 'prac-87',
        ques: 'How am I called?',
        answer: 'guard',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977442/English/objects/gjofhmscnigkga5xza5f.png',
      },
      {
        _id: 'prac-88',
        ques: 'How am I called?',
        answer: 'children',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977443/English/objects/g4xtt7tevie8eufmfgyk.png',
      },
      {
        _id: 'prac-89',
        ques: 'How am I called?',
        answer: 'king',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977446/English/objects/yqp1uz53q2ooqpu6luy0.png',
      },
    ],
    [
      {
        _id: 'prac-90',
        ques: 'How am I called?',
        answer: 'nurse',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977444/English/objects/dwu9671dkqz6yzhfufly.png',
      },
      {
        _id: 'prac-91',
        ques: 'How am I called?',
        answer: 'driver',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977449/English/objects/xafeq6nc7eu38i6khnbo.png',
      },
      {
        _id: 'prac-92',
        ques: 'How am I called?',
        answer: 'doctor',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652977416/English/objects/tvizbrjq9c1k7a9mk6fq.png',
      },
    ],
  ],
};
const numbers = {
  type: 'numbers',
  img: numbersBg,
  code: 'nums',
  tests: [
    [
      {
        _id: 'nums-0',
        ques: 'Name of the number?',
        answer: 'one',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/imzu3z5jkuejez1xddur.png',
      },
      {
        _id: 'nums-1',
        ques: 'Name of the number?',
        answer: 'two',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/dfdwp5qxanii1lm0mkwd.png',
      },
      {
        _id: 'nums-2',
        ques: 'Name of the number?',
        answer: 'three',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/ppsjjs6srfhibileuvcb.png',
      },
      {
        _id: 'nums-3',
        ques: 'Name of the number?',
        answer: 'four',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/xoh4gbx3k2msue21jwht.png',
      },
      {
        _id: 'nums-4',
        ques: 'Name of the number?',
        answer: 'five',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/jmxi0espyplpl90abo4h.png',
      },
    ],
    [
      {
        _id: 'nums-5',
        ques: 'Name of the number?',
        answer: 'six',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/cpxqxxicrmz4sgfjh3zy.png',
      },
      {
        _id: 'nums-6',
        ques: 'Name of the number?',
        answer: 'seven',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/zujac7d5vqn0comxfdgk.png',
      },
      {
        _id: 'nums-7',
        ques: 'Name of the number?',
        answer: 'eight',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/l8qzwnkyroiac33jdmzp.png',
      },
      {
        _id: 'nums-8',
        ques: 'Name of the number?',
        answer: 'nine',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/rccosygjuptc0i1bynpa.png',
      },
      {
        _id: 'nums-9',
        ques: 'Name of the number?',
        answer: 'zero',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721282/English/numbers/tqjx8i0vucpzohvzkrin.png',
      },
    ],
    [
      {
        _id: 'nums-10',
        ques: 'Name of the number?',
        answer: 'ten',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/rqsjxvtcsx1baxogqogu.png',
      },
      {
        _id: 'nums-11',
        ques: 'Name of the number?',
        answer: 'eleven',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/ypxqdldkc0uofxyzdi9i.png',
      },
      {
        _id: 'nums-12',
        ques: 'Name of the number?',
        answer: 'twelve',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721282/English/numbers/pmfi080ooslqbvvvwt1q.png',
      },
      {
        _id: 'nums-13',
        ques: 'Name of the number?',
        answer: 'thirteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/vorjpwcg3x3hpyohs7d8.png',
      },
      {
        _id: 'nums-14',
        ques: 'Name of the number?',
        answer: 'fourteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/vsxaaoc3is9ey4bwolks.png',
      },
    ],
    [
      {
        _id: 'nums-15',
        ques: 'Name of the number?',
        answer: 'fifteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/jungjtihndn0eljgrbaz.png',
      },
      {
        _id: 'nums-16',
        ques: 'Name of the number?',
        answer: 'sixteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/zibiic9hvizyvr7ddjf2.png',
      },
      {
        _id: 'nums-17',
        ques: 'Name of the number?',
        answer: 'seventeen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/mfaeudjpwdfmmjrzwvsp.png',
      },
      {
        _id: 'nums-18',
        ques: 'Name of the number?',
        answer: 'eighteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/ns4avdolscqhuieghou6.png',
      },
      {
        _id: 'nums-19',
        ques: 'Name of the number?',
        answer: 'nineteen',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/zn1dygpczuawkjoy6hdn.png',
      },
    ],
    [
      {
        _id: 'nums-20',
        ques: 'Name of the number?',
        answer: 'twenty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721282/English/numbers/e01oydpn6dbp4fltlnt5.png',
      },
      {
        _id: 'nums-21',
        ques: 'Name of the number?',
        answer: 'thirty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/psxf7vlzl20mlywabd1e.png',
      },
      {
        _id: 'nums-22',
        ques: 'Name of the number?',
        answer: 'forty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/zeeup3zvmdwxb80vjdhc.png',
      },
      {
        _id: 'nums-23',
        ques: 'Name of the number?',
        answer: 'fifty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/uoosk54w8srxz8ca2hup.png',
      },
      {
        _id: 'nums-24',
        ques: 'Name of the number?',
        answer: 'sixty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721281/English/numbers/mn2uozoz1pnb32yhrtlf.png',
      },
    ],
    [
      {
        _id: 'nums-25',
        ques: 'Name of the number?',
        answer: 'seventy',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/pqo2ouqpivjxhcti57gx.png',
      },
      {
        _id: 'nums-26',
        ques: 'Name of the number?',
        answer: 'eighty',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721278/English/numbers/nqwsebyvjsoiavk4zqyr.png',
      },
      {
        _id: 'nums-27',
        ques: 'Name of the number?',
        answer: 'ninety',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721279/English/numbers/pjgder29xvef8ed5dhoi.png',
      },
      {
        _id: 'nums-28',
        ques: 'Name of the number?',
        answer: 'one hundred',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/r42il9slxkhlw7nxevqp.png',
      },
      {
        _id: 'nums-29',
        ques: 'Name of the number?',
        answer: 'one thousand',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1652721280/English/numbers/stwvxh2mbrlsamivhjpf.png',
      },
    ],
  ],
};
const grammar = {
  type: 'grammar',
  img: grammarBg,
  code: 'gram',
  tests: [
    [
      {
        _id: 'gram-0',
        ques: 'Eat in past simple',
        answer: 'ate',
      },
      {
        _id: 'gram-1',
        ques: 'Sleep in past simple',
        answer: 'slept',
      },
      {
        _id: 'gram-2',
        ques: 'Run in past simple',
        answer: 'ran',
      },
      {
        _id: 'gram-3',
        ques: 'Throw in past simple',
        answer: 'threw',
      },
      {
        _id: 'gram-4',
        ques: 'Send in past simple',
        answer: 'sent',
      },
    ],
  ],
};
const space = {
  type: 'solar system',
  img: spaceBg,
  code: 'space',
  tests: [
    [
      {
        _id: 'space-0',
        ques: 'Name of the star?',
        answer: 'sun',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235443/English/solar%20system/vu1d9germvb8tfjkq5ox.jpg',
      },
      {
        _id: 'space-1',
        ques: 'Name of the planet?',
        answer: 'mercury',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235437/English/solar%20system/iou9cabmczf8r9hsejxy.png',
      },
      {
        _id: 'space-2',
        ques: 'Name of the planet?',
        answer: 'venus',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235390/English/solar%20system/ghisbpq4qr65xg2c7gpn.png',
      },
      {
        _id: 'space-3',
        ques: 'Name of the planet?',
        answer: 'earth',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235389/English/solar%20system/skabhtvk7anvpvwglds2.jpg',
      },
      {
        _id: 'space-4',
        ques: 'Name of the planet?',
        answer: 'moon',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235389/English/solar%20system/vej1mhjinqusbutfhqih.jpg',
      },
    ],
    [
      {
        _id: 'space-5',
        ques: 'Name of the planet?',
        answer: 'mars',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235389/English/solar%20system/l2ahvvray4wrh6x8bkdc.jpg ',
      },
      {
        _id: 'space-6',
        ques: 'Name of the planet?',
        answer: 'jupiter',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235390/English/solar%20system/cddltingfezcsnvrvd8x.png',
      },
      {
        _id: 'space-7',
        ques: 'Name of the planet?',
        answer: 'saturn',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235389/English/solar%20system/xlsfirjrwlnilydybbqz.jpg',
      },
      {
        _id: 'space-8',
        ques: 'Name of the planet?',
        answer: 'uranus',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235391/English/solar%20system/xxt8ik1ry5y3w7x21nxe.png',
      },
      {
        _id: 'space-9',
        ques: 'Name of the planet?',
        answer: 'neptune',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1653235558/English/solar%20system/yqk8rpxpxurrtk4rp0xn.png',
      },
    ],
  ],
};
const food = {
  type: 'food',
  img: foodBg,
  code: 'food',
  tests: [
    [
      {
        _id: 'food-0',
        ques: 'Name of the food?',
        answer: 'sandwich',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544484/English/food/g5vzqvc4duizqaheoczh.jpg',
      },
      {
        _id: 'food-1',
        ques: 'Name of the food?',
        answer: 'salad',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544484/English/food/jzgpbgvuemdpmkldnn8v.jpg',
      },
      {
        _id: 'food-2',
        ques: 'Name of the food?',
        answer: 'pizza',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544484/English/food/bnemhi2tk8kk94gge0yu.jpg',
      },
      {
        _id: 'food-3',
        ques: 'Name of the food?',
        answer: 'hamburger',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544480/English/food/uofa2vpdqneojxf1uzs6.jpg',
      },
      {
        _id: 'food-4',
        ques: 'Name of the food?',
        answer: 'falafel',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/d5f01obspclplmk3z36b.png',
      },
    ],
    [
      {
        _id: 'food-5',
        ques: 'Name of the food?',
        answer: 'ice cream',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544479/English/food/boz3equf0pilnkyychvj.jpg',
      },
      {
        _id: 'food-6',
        ques: 'Name of the food?',
        answer: 'soup',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/tycrdsccqqz9zpj7cjma.jpg',
      },
      {
        _id: 'food-7',
        ques: 'Name of the food?',
        answer: 'spaghetti',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/zenwhiidojk84ppeuudp.jpg',
      },
    ],
  ],
};
const furitsAndVeggie = {
  type: 'Fruits & Vegetables',
  img: fruAndVegBg,
  code: 'frvg',
  tests: [
    [
      {
        _id: 'frvg-0',
        ques: 'Name of the fruit',
        answer: 'apple',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544478/English/food/d58nkjucbkuojsjsn2gv.jpg',
      },
      {
        _id: 'frvg-1',
        ques: 'Name of the fruit',
        answer: 'banana',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544479/English/food/c802tvtbpyoh1tinv1yl.jpg',
      },
      {
        _id: 'frvg-2',
        ques: 'Name of the fruit',
        answer: 'orange',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544482/English/food/sxlt6bxyl3hybmhqjdgk.jpg',
      },
      {
        _id: 'frvg-3',
        ques: 'Name of the fruit',
        answer: 'mango',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544481/English/food/dub1etkeexlrscuzho8h.jpg',
      },
      {
        _id: 'frvg-4',
        ques: 'Name of the fruit',
        answer: 'lemon',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544480/English/food/iolxysmjsrxwwff0of71.jpg',
      },
    ],
    [
      {
        _id: 'frvg-5',
        ques: 'Name of the fruit',
        answer: 'watermelon',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/llhl2rhaf3wfi052rznj.png',
      },
      {
        _id: 'frvg-6',
        ques: 'Name of the fruit',
        answer: 'pear',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654545416/English/food/rjsabvcnfmokkgiymjz2.jpg',
      },
      {
        _id: 'frvg-7',
        ques: 'Name of the fruit',
        answer: 'strawberry',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/zr8vwy8gpvzh0ql1m1uq.jpg',
      },
      {
        _id: 'frvg-8',
        ques: 'Name of the fruit',
        answer: 'pineapple',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544482/English/food/opzy76wduvxxbh62txj2.jpg',
      },
      {
        _id: 'frvg-9',
        ques: 'Name of the fruit',
        answer: 'coconut',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544483/English/food/iysxrlb6awcm0h27n4nn.png',
      },
    ],
    [
      {
        _id: 'frvg-10',
        ques: 'Name of the fruit',
        answer: 'grape',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544479/English/food/tc7jrgutc6vdnqnbadhn.jpg',
      },
      {
        _id: 'frvg-11',
        ques: 'Name of the fruit',
        answer: 'cherry',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544481/English/food/oe2dxcs28ihprcfxxfsk.jpg',
      },
      {
        _id: 'frvg-12',
        ques: 'Name of the vegetable',
        answer: 'tomato',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544485/English/food/xcytmvskanrhpqe4jmit.jpg',
      },
      {
        _id: 'frvg-13',
        ques: 'Name of the vegetable',
        answer: 'cucumber',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544480/English/food/b8tex2hf7xmkbn2dsyyv.jpg',
      },
      {
        _id: 'frvg-14',
        ques: 'Name of the vegetable',
        answer: 'carrot',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544478/English/food/d9ye8qxxmu4fi2xfih0n.jpg',
      },
    ],
    [
      {
        _id: 'frvg-15',
        ques: 'Name of the vegetable',
        answer: 'potato',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544483/English/food/kchfe9smalho5drpa1qn.jpg',
      },
      {
        _id: 'frvg-16',
        ques: 'Name of the vegetable',
        answer: 'pumpkin',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544484/English/food/hh6wgvbvcvw04kjolya6.jpg',
      },
      {
        _id: 'frvg-15',
        ques: 'Name of the vegetable',
        answer: 'cabbage',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544478/English/food/zccovhfwx6fdftxgc2w1.png',
      },
      {
        _id: 'frvg-16',
        ques: 'Name of the vegetable',
        answer: 'broccoli',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544478/English/food/ydzpcsiycbv7svcpdqvd.jpg',
      },
      {
        _id: 'frvg-17',
        ques: 'Name of the vegetable',
        answer: 'mushroom',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1654544482/English/food/ed4ew5wzcw9dmum9mkya.jpg',
      },
    ],
  ],
};

// const complete = {
//   type: 'complete the sentence',
//   background: 'linear-gradient(to top left, #e52a5a, #ff585f)',
//   code: 'comp',
//   tests: [
//     [
//       {
//         _id: 'comp-0',
//         ques: 'Dan is _______ to the school',
//         answer: 'walking',
//         color: '#FF4949',
//       },
//       {
//         _id: 'comp-1',
//         ques: 'Gali is ______ a banana',
//         answer: 'eating',
//         color: '#2155CD',
//       },
//       {
//         _id: 'comp-2',
//         ques: 'The boy is __ the car',
//         answer: 'in',
//         color: '#6BCB77',
//       },
//       {
//         _id: 'comp-3',
//         ques: 'The dog is _______',
//         answer: 'barking',
//         color: '#FDF6EC',
//       },
//       {
//         _id: 'comp-4',
//         ques: 'Shay is _______',
//         answer: 'jumping',
//         color: '#F9D923',
//       },
//     ],
//     [
//       {
//         _id: 'comp-5',
//         ques: 'Lior is drinking a glass of _____',
//         answer: 'water',
//         color: '#F66B0E',
//       },
//       {
//         _id: 'comp-6',
//         ques: 'The children are ______ on the sofa',
//         answer: 'sitting',
//         color: '#8A39E1',
//       },
//       {
//         _id: 'comp-7',
//         ques: 'Tom is at the ___ _______',
//         answer: 'bus station',
//         color: '#2C3333',
//       },
//       {
//         _id: 'comp-8',
//         ques: 'Dan says "Look! that _____ looks like a rabbit"',
//         answer: 'cloud',
//         color: '#D1D1D1',
//       },
//       {
//         _id: 'comp-9',
//         ques: 'The boy is wearing a ____ shirt',
//         answer: 'blue',
//         color: '#F806CC',
//       },
//     ],
//   ],
// };

export const categories = [
  animals,
  colors,
  food,
  furitsAndVeggie,
  grammar,
  numbers,
  countries,
  space,
  practice,
];

const teacher = {
  type: 'teacher',
  fullName: 'Dana',
  id: 'pass123',
  completedTests: ['anml-0', 'anml-1', 'anml-2', 'anml-3', 'anml-4'],
};
const students = [
  {
    fullName: 'Tomer dahari',
    id: 210,
    completedTests: ['anml-0', 'anml-1', 'anml-2', 'anml-3', 'anml-4'],
  },
  { fullName: 'Yarden Cohen', id: 211, completedTests: [] },
  { fullName: 'Tom Shelby', id: 212, completedTests: [] },
  { fullName: 'Jon wick', id: 213, completedTests: [] },
  { fullName: 'Ted moseby', id: 214, completedTests: [] },
];

export const getStudentStats = (student, categories) => {
  const categoriesCodes = categories.map((c) => c.code);
  const obj = {};
  for (const key of categoriesCodes) {
    obj[key] = 0;
  }
  categoriesCodes.forEach((c) => {
    student.completedTests.forEach((t) => {
      if (t.includes(c)) {
        obj[c]++;
      }
    });
  });
  return Object.values(obj);
};

export const classRoom = {
  categories,
  teacher,
  students,
};

export const GetNumCategories = (categories) => {
  let counter = 0;
  categories
    .map((cat) => cat.tests)
    .forEach((test) => {
      test.forEach((t) => (counter += t.length));
    });
  return counter;
};

export const getHint = (answer) => {
  let str = answer.replaceAll(' ', ',').split('');
  let length = Math.floor(str.length / 2);
  let counter = 0;
  while (counter <= length - 1) {
    const randomInt = utilService.getRandomIntInclusive(0, str.length - 1);
    if (str[randomInt] === '_') continue;
    str[randomInt] = '_';
    counter++;
  }
  return str.join(',');
};

export const checkIfDone = (user, test) => {
  let newUser = user?.completedTests
    ? user
    : { fullName: user.fullName, completedTests: [] };
  return test.every((t) => newUser.completedTests.includes(t._id));
};

export const msgObj = {
  correct: { txt: '🤩 You are correct ! 🤩', msgClass: 'success' },
  wrong: { txt: '😬 Try Again! 😬', msgClass: 'red' },
  party: {
    txt: '💪 Another test completed! 💪',
    msgClass: `party party-1`,
  },
};
