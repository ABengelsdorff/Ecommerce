"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import useUserDataStore from "@/store";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";


const NavbarMain = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cart, setCart, userData, setUserData } = useUserDataStore();

  //Cerrar sesión
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token"); // Elimina el token
    }
    setUserData(null); 
    setCart([]);
    router.push("/"); 
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

      {/* Menú hamburguesa visible desde pantallas medianas hasta pequeñas */}
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Link className="font-bold text-inherit" href="/">
            INNOVA
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menú visible en pantallas grandes */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Link className="font-bold text-inherit" href="/">
            INNOVA
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link color="foreground" href="/product">
            Productos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/about">
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
          <>
            <NavbarItem>
              <Button color="danger" onClick={handleLogout} variant="flat">
                Cerrar Sesión
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {/* Si el usuario está logueado, muestra el enlace a su dashboard */}
      {userData?.token && (
        <>
          <NavbarItem>
            {/* Hacer que el nombre del usuario sea un enlace */}
            <Link
              href="/dashboard"
              color="foreground"
              className="font-bold cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {userData?.user?.name || "Usuario"}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/shopping-cart" className="relative">
              <ShoppingCart size={24} />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-orange-500 text-white rounded-full text-sm w-5 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </NavbarItem>
        </>
      )}

      {/* Menú desplegable para pantallas pequeñas (visible cuando el menú hamburguesa está abierto) */}

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="/product" size="lg">
            Productos
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
};

export default NavbarMain;
