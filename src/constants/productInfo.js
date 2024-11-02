import chanaM from "../images/chana masala.png";
import chatM from "../images/chat masala.png";
import chickenM from "../images/chicken masala.png";
import coriander from "../images/Corriender.png";
import garamM from "../images/Garam Masala.png";
import jeeravan from "../images/Jeeravan.png";
import kashmiriMirch from "../images/kashmiri mirch.png";
import kasuriMethi from "../images/kasuri methi.png";
import kitchenKing from "../images/Kitchen King.png";
import muttonM from "../images/Mutton Masala.png";
import redChilli from "../images/Red Chilli.png";
import SambharM from "../images/Sambhar Masala.png";
import turmeric from "../images/Turmeric.png";

export const products = [
  
  { 
    id: 1, 
    name: 'Turmeric Powder', 
    category: 'Pure Spices', 
    image: turmeric,
    description: 'A vibrant yellow spice with a warm, earthy flavor and numerous health benefits.',
    usage: 'Used in curries, rice dishes, and for its anti-inflammatory properties in golden milk.',
    packaging: '10 Rs / 50 gms / 100 gms / 200 gms / 500 gms',
    extraInfo: 'Known for its antioxidant and anti-inflammatory properties.',
    color: '#CDA801'
  },
  { 
    id: 2, 
    name: 'Coriander Powder', 
    category: 'Pure Spices', 
    image: coriander,
    description: 'A versatile spice with a slightly sweet, lemony flavor.',
    usage: 'Used in various cuisines, particularly in Indian, Middle Eastern, and Mexican dishes.',
    packaging: '10 Rs / 50 gms / 100 gms / 200 gms / 500 gms',
    extraInfo: 'Rich in antioxidants and may help lower blood sugar levels.',
    color: '#006C38'
  },
  { 
    id: 3, 
    name: 'Red Chilli ', 
    category: 'Pure Spices', 
    image: redChilli,
    description: 'Renowned for its ability to enhance flavor while offering health benefits such as boosting metabolism and providing antioxidants.',
    usage: 'Ideal for use in salsas, stews, and marinades, chilli powder is perfect for adding a spicy kick to any recipe.',
    packaging: '10 Rs / 50 gms / 100 gms / 200 gms / 500 gms / 1 kg ',
    extraInfo: 'Known for its digestive benefits and rich iron content.',
    color: '#D42D32'
  },
  { 
    id: 4, 
    name: 'Garam Masala', 
    category: 'Blended Spices', 
    image: garamM,
    description: 'A fragrant blend of ground spices that captures the essence of Indian cuisine. Known for its warm, complex flavor profile, garam masala enhances dishes with a rich aroma and depth.',
    packaging: ' 50 gms / 100 gms / 500 gms ',
    usage: 'Perfect for curries, stews, and roasted meats, garam masala is often added at the end of cooking to preserve its aromatic qualities and elevate your culinary creations.',
    color: '#215866'
  },
  { 
    id: 5, 
    name: 'Chana Masala', 
    category: 'Blended Spices', 
    image: chanaM,
    description: ' Chana masala combines aromatic spices like cumin, coriander, and garam masala, resulting in a savory dish that’s both hearty and nutritious, packed with protein and fiber.',
    packaging: ' 50 gms / 100 gms / 500 gms',
    usage: 'Ideal for curries, stews, and as a base for chickpea salads, chana masala adds a delightful depth of flavor to your dishes. Serve it with rice, naan, or as a standalone dish for a satisfying meal.',
    color: '#6E2066'
  },
  { 
    id: 6, 
    name: 'Chat Masala', 
    category: 'Blended Spices', 
    image: chatM,
    description: 'A tangy and zesty spice blend that captures the essence of Indian street food. This vibrant mix combines ingredients like dried mango powder, cumin, coriander, and black salt to create a burst of flavor that elevates any dish.',
    usage: 'Sprinkle chaat masala over fruits, salads, and savory snacks like papdi or bhel puri for an added zing. It’s also perfect for seasoning fried or roasted vegetables, enhancing their natural flavors and making your dishes irresistible.',
    packaging: '50 gms / 100 gms / 500 gms',
   
    color: '#AE1B3B'
  },
  { 
    id: 7, 
    name: 'Chicken Masala', 
    category: 'Blended Spices', 
    image: chickenM,
    description: 'Chicken masala is cherished for its ability to transform simple chicken recipes into mouthwatering meals, infusing them with a delightful combination of warmth and spice.',
    usage: 'Use chicken masala to marinate chicken before grilling, roasting, or frying. It is also perfect for curries, stews, and biryanis, adding a fragrant and flavorful touch that makes every dish a culinary delight.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#662F2E'
  },
  { 
    id: 8, 
    name: 'Mutton Masala', 
    category: 'Blended Spices', 
    image: muttonM,
    description: 'An exquisite blend of spices specifically designed to complement the rich, succulent flavors of mutton. ',
    usage: 'Ideal for curries, stews, and slow-cooked dishes, mutton masala can be used to marinate mutton before cooking or added to the pot for a robust flavor. It is perfect for traditional dishes like Rogan Josh, Mutton Biryani, and Mutton Vindaloo, providing a delicious and aromatic experience.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#87492A'
  },
  { 
    id: 9, 
    name: 'Jeeravan', 
    category: 'Blended Spices', 
    image: jeeravan,
    description: 'A fragrant blend of cumin and aromatic spices, Jeeravan adds a warm, nutty flavor to dishes. Perfect for enhancing the taste of vegetables, meats, and lentils, it is a versatile seasoning in Indian cuisine.',
    usage: 'Ideal for seasoning curries, marinades, and rice dishes, Jeeravan enhances the flavor of lentils and vegetables, making it a staple in many Indian recipes. Use it to sprinkle over roasted or grilled dishes for an extra kick of flavor.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#ECBA52'
  },
  { 
    id: 10, 
    name: 'Kashmiri Mirch', 
    category: 'Blended Spices', 
    image: kashmiriMirch,
    description: 'A vibrant red chili powder known for its mild heat and rich color, Kashmiri Mirch adds a beautiful hue to dishes without overwhelming spiciness.',
    usage: 'Perfect for curries, tandoori dishes, and marinades, Kashmiri Mirch enhances the color and flavor of dishes while maintaining a mild heat level. Sprinkle it on top of dishes for added visual appeal and a subtle warmth.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#D60022'
  },
  { 
    id: 11, 
    name: 'Kasuri Methi', 
    category: 'Blended Spices', 
    image: kasuriMethi,
    description: 'Dried fenugreek leaves with a distinct, aromatic flavor, Kasuri Methi adds a unique depth to various dishes. Its slightly bitter yet earthy taste enhances the overall flavor profile, making it a staple in Indian cooking.',
    usage: 'Ideal for seasoning curries, lentil dishes, and bread, Kasuri Methi can be crushed and sprinkled in during cooking or used as a garnish to elevate the taste and aroma of your favorite meals.',
    packaging: '25 gms ',
    color: '#ADD03D'
  },
  { 
    id: 12, 
    name: 'Sambhar Masala', 
    category: 'Blended Spices', 
    image: SambharM,
    description: 'A fragrant blend of spices that includes coriander, cumin, and mustard seeds, Sambhar Masala is essential for creating the beloved South Indian lentil stew. ',
    usage: 'Perfect for preparing sambhar, this masala can also be used to enhance vegetable curries, rice dishes, and soups, providing a warm and aromatic touch to your culinary creations.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#F5E502'
  },
  { 
    id: 13, 
    name: 'Kitchen King', 
    category: 'Blended Spices', 
    image: kitchenKing,
    description: 'A versatile spice blend that combines a medley of aromatic spices, Kitchen King Masala adds depth and flavor to a variety of dishes. Its balanced profile makes it a favorite for home cooks and professional chefs alike.',
    usage: 'Ideal for curries, vegetable dishes, and rice preparations, this masala enhances the taste of both vegetarian and non-vegetarian recipes, making it a staple in every kitchen.',
    packaging: '50 gms / 100 gms / 500 gms',
    color: '#005551'
  },
];

