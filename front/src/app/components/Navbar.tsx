"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import useUserDataStore from "@/store"
import { useRouter } from "next/navigation";



const NavbarMain = () => {
  const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { userData, setUserData} = useUserDataStore()

    const handleLogout = () => {
      setUserData(null); // Limpia el estado de usuario
      localStorage.removeItem("token"); // Opcional, elimina el token si se usa
      router.push("/") // Redirige al inicio
    };


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


       {/* Botones de sesión */}
      <NavbarContent justify="end">
        {!userData?.token ? (
          <>

            <NavbarItem>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Iniciar Sesión
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Registrarse
              </Button>
            </NavbarItem>
            
          </>
        ) : (
          <NavbarItem>
            <Button color="danger" onClick={handleLogout} variant="flat">
              Cerrar Sesión
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {userData?.token && (
          <>




            <NavbarItem>
              <p color="primary">
                {userData.user.name}
              </p>
            </NavbarItem>
            
          </>
        )}



       {/* Pantallas pequeñas */}
       <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/product" size="lg">
            Productos
          </Link>
        </NavbarMenuItem>
        
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/shopping-cart" size="lg">
            Carrito de Compras
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/about" size="lg">
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
    );
}
export default NavbarMain;