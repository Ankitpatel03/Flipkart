import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
         <header>
     <div class="navbar">
            <div class="nav-logo ">
                <div class="logo"></div>
            </div>

            {/* <div class="nav-addres com border">
                <p class="add-first">deliver to</p>
                <div class="add-icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="add-second">India</p>
                </div>
            </div> */}

            <div class="nav-search">
            <select class="search-select">
                <option value="">All</option>
            </select>
            <input type="search" placeholder="Search your favorite item" class="search-input"/>
            <div class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            
            <div class="nav-cart com border">
            <i class="fa-regular fa-circle-user"> </i>
            <select className='bg-zinc-950  text-white'>
                <option>Login</option>
                {/* <option>My Profile</option>
                <option>Flipkart Plus Zone</option>
                <option>Order</option>
                <option>Reward</option>
                <option>Wishlist</option>
                <option>Gift Card</option> */}
                
            </select>
            
                
            </div>

            <div class="nav-cart com ">
                <i class="fa-solid fa-cart-shopping"></i>
                Cart
            </div>

            <div class="nav-cart com ">
            <i class="fa-solid fa-store"></i>
                Become a Seller
            </div>

            <div class=" com border">
            <i class="fa-solid fa-ellipsis-vertical"></i>
                
            </div>

        </div>
     </header>
    </div>
  )
}

export default Navbar