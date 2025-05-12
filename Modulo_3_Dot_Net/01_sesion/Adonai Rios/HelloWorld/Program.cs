// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

using System;
using System.Reflection.Metadata.Ecma335;


//@->20250512T0910 Mi primer programilla con Liderly con C#

class Program
{

    private static Dictionary<string,string> usuarios = new Dictionary<string, string>
    {
        {"admin","qwerty"},
        {"adonas","12345"},
        {"test","test"}
    };

   static void Main ( string[] args ) 
   {
        //Mensaje de bienvenida
        
        Console.WriteLine("Este es el programa oficinal de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesión \n");                
        //Definir el usuario y la contraseña        

         
        Console.WriteLine("Escribe tu usuario");        
        string usuarioCapturado = Console.ReadLine();


        Console.WriteLine("Escribe tu contraseña");
        String passCapturado = Console.ReadLine();

            
        if ( usuarios.ContainsKey(usuarioCapturado)  && usuarios[usuarioCapturado] ==  passCapturado)
        {
            Console.WriteLine("Autenticación conseguida de manera adecuada");
            
            for ( int i = 0 ; i<5; i++ )
            {
                Console.WriteLine($"{i} Hola usuario, gracias !!!");
            }
            
        }
        else
        {
            Console.WriteLine("Usuario o contarseña incorrecta, intente nuevamente.");
        }
    
        Console.WriteLine("\n Presiona enter para salir del programa ");
        Console.ReadLine();                


   }
}




