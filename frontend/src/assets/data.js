// popular
import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

// latest 
import p5_img from "./product_12.png";
import p6_img from "./product_35.png";
import p7_img from "./product_14.png";
import p8_img from "./product_8.png";
import p9_img from "./product_15.png";
import p10_img from "./product_2.png";
import p11_img from "./product_17.png";
import p12_img from "./product_28.png";

// Footer
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import youtube from './youtube.svg'
import linkedin from './linkedin.svg'


export const POPULAR = [
    {
      id: 1,
      name: "Caramel Macchiato",
      image: p1_img,
      new_price: 5.00,
      old_price: 6.50,
    },
    {
      id: 2,
      name: "Cappuccino",
      image: p2_img,
      new_price: 4.50,
      old_price: 5.50,
    },
    {
      id: 3,
      name: "Mocha Frappuccino",
      image: p3_img,
      new_price: 6.00,
      old_price: 7.00,
    },
    {
      id: 4,
      name: "Iced Latte",
      image: p4_img,
      new_price: 5.50,
      old_price: 7.00,
    },
  ];
  
  export const LATEST = [
    {
      id: 5,
      name: "Flat White",
      image: p5_img,
      new_price: 4.50,
      old_price: 6.00,
    },
    {
      id: 6,
      name: "Pumpkin Spice Latte",
      image: p6_img,
      new_price: 5.50,
      old_price: 7.00,
    },
    {
      id: 7,
      name: "Nitro Cold Brew",
      image: p7_img,
      new_price: 6.00,
      old_price: 8.00,
    },
    {
      id: 8,
      name: "Caramel Frappuccino",
      image: p8_img,
      new_price: 5.00,
      old_price: 6.50,
    },
    {
      id: 9,
      name: "Iced Americano",
      image: p9_img,
      new_price: 4.00,
      old_price: 5.00,
    },
    {
      id: 10,
      name: "Hot Chocolate",
      image: p10_img,
      new_price: 4.50,
      old_price: 6.00,
    },
    {
      id: 11,
      name: "Matcha Latte",
      image: p11_img,
      new_price: 5.50,
      old_price: 7.00,
    },
    {
      id: 12,
      name: "Mocha Latte",
      image: p12_img,
      new_price: 5.00,
      old_price: 6.50,
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About Us",
        "Menu",
        "Store Locator",
        "FAQ",
        "Privacy Policy",
      ],
    },
    {
      title: "Our Community",
      links: [
        "Careers",
        "Sustainability",
        "Customer Reviews",
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Customer Service", value: "1-800-Roastoria " },
      { label: "Email Address", value: "support@Roastoria.com" },
    ],
  };
  
  export const SOCIALS = {
    title: "Follow Us",
    links: [
      facebook,
      instagram,
      twitter,
      youtube,
      linkedin,
    ],
  };