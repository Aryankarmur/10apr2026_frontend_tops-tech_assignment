
// import './App.css'

import ProductCard from "./components/ProductCard"
import UserProfile from "./components/UserProfile"

function App() {


  return (
    <>
    {/* Task 1,4 */}
      <ProductCard img_url={"https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"} p_name={"shoes"} p_price={2000}/>

      {/* Task 2,3 */}
      <UserProfile img={"https://img.magnific.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"} name={"aryan_ahir"} followers={3000}/>
    </>
  )
}

export default App
