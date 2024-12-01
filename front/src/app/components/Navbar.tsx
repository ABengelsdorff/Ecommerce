"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";


const NavbarMain = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return(
        <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Link className="font-bold text-inherit" href="http://localhost:3000"> MI TIENDA </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Link className="font-bold text-inherit" href="http://localhost:3000"> MI TIENDA </Link>
        </NavbarBrand>
        
        <NavbarItem>
          <Link color="foreground" href="/product">
          Productos
          </Link>
        </NavbarItem>
    

        <NavbarItem>
          <Link color="foreground" href="/shopping-cart">
          Carrito de Compras
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="about">
          Sobre Nosotros
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        
       
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
        
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Serrar Sesion</Link>
        </NavbarItem>
      </NavbarContent>

       {/* Pantallas pequeññas */}
       <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/product" size="lg">
            Productos
          </Link>
        </NavbarMenuItem>
        
        <NavbarMenuItem>
          <Link className="w-full" color="warning" href="/shopping-cart" size="lg">
            Carrito de Compras
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/about" size="lg">
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link className="w-full" color="danger" href="/logout" size="lg">
            Cerrar Sesión
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
    )
}
export default NavbarMain;