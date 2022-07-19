class Usuario {
    constructor (nombre, apellido) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = []
      this.mascotas = [] 
    }
    static countMascotas = 0
    static getBookNames = []
    getFullName(){
     return `${this.nombre} ${this.apellido}`
    }
    addMascota(a){
      this.mascotas.push(a)
      Usuario.countMascotas += 1
    }
    addBook(a,b) {
      this.libros.push({nombre:a, autor:b})
      Usuario.getBookNames.push(a)
    }
}
  
const Cristobal = new Usuario("Cristobal","Rodriguez")
Cristobal.addMascota("Leon")
Cristobal.addMascota("Jirafa")
Cristobal.addMascota("Perro")
Cristobal.addBook("Harry Potter","JK Rowling")
Cristobal.addBook("Naruto","Mashashi Kishimoto")
console.log(Cristobal)
console.log(Usuario.countMascotas)
console.log(Usuario.getBookNames)
Cristobal.getFullName()
  