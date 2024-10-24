# 📦 NextMID_Web - Guía de Contribución y Uso del Repositorio

## 📋 Índice
1. [Clonar el Repositorio](#clonar-el-repositorio)
2. [Configurar Git por Primera Vez](#configurar-git)
3. [Sincronizar tu Repositorio Local con el Remoto](#sincronizar-repositorio)
4. [Subir Cambios al Repositorio](#subir-cambios)
5. [Cómo Crear una Pull Request](#cómo-crear-una-pull-request)
6. [Comandos Útiles](#comandos-útiles)
7. [Ejemplo Completo del Flujo](#ejemplo-completo-del-flujo)

---

## 🌀 Clonar el Repositorio
Este paso te permite copiar todo el proyecto desde GitHub a tu computadora.

```bash
# Clonar el repositorio
git clone https://github.com/Playmaker3334/NextMID_Web.git
```
> **Nota:** Cambia la URL si tu repositorio tiene un nombre diferente.

---

## 🔧 Configurar Git
Antes de comenzar a trabajar, asegúrate de que Git esté configurado correctamente en tu máquina.

```bash
# Configurar tu nombre
git config --global user.name "Tu Nombre"

# Configurar tu correo (el mismo que usas en GitHub)
git config --global user.email "tuemail@ejemplo.com"

# Verifica la configuración
git config --list
```

---

## 🔄 Sincronizar tu Repositorio
Es importante mantener tu copia local siempre actualizada con los cambios del repositorio remoto.

```bash
# Navega al directorio del proyecto
cd ~/Downloads/NextMID_Web

# Verifica en qué rama estás
git branch

# Sincroniza tu rama local con la rama remota
git fetch origin

# Actualiza tu rama local con los últimos cambios
git pull origin main
```

---

## 📥 Subir Cambios al Repositorio
### **Paso 1: Realiza Cambios Localmente**
Edita o agrega archivos en el directorio del proyecto.

### **Paso 2: Añadir Cambios a Git**
```bash
# Añadir un archivo específico
git add index.html

# Añadir todos los cambios
git add .
```

### **Paso 3: Hacer un Commit**
```bash
# Realiza un commit describiendo los cambios realizados
git commit -m "Descripción clara de los cambios realizados"
```

### **Paso 4: Subir los Cambios**
```bash
# Subir cambios a la rama main
git push origin main
```

---

## 🔀 Cómo Crear una Pull Request
Si estás trabajando en una rama diferente y quieres fusionar tus cambios en `main`, debes crear una **Pull Request**.

1. **Crea una Rama Nueva:**  
   ```bash
   git checkout -b mi-nueva-rama
   ```

2. **Sube tus Cambios a la Nueva Rama:**  
   ```bash
   git push origin mi-nueva-rama
   ```

3. **Abre una Pull Request en GitHub:**  
   - Ve a GitHub y selecciona tu repositorio.
   - Haz clic en **"Compare & pull request"**.
   - Escribe una descripción clara del cambio y haz clic en **"Create pull request"**.

4. **Fusiona la Pull Request:**  
   Una vez aprobada, puedes fusionarla a la rama `main`.

---

## 📌 Comandos Útiles
```bash
# Ver el historial de commits
git log --oneline --graph --decorate

# Ver el estado actual del repositorio
git status

# Cambiar a otra rama
git checkout nombre-rama

# Crear una nueva rama
git checkout -b nueva-rama

# Ver las ramas disponibles
git branch

# Fusionar una rama con main
git merge nombre-rama
```

---

## 📝 Ejemplo Completo del Flujo
### **1. Clonar el Repositorio**
```bash
git clone https://github.com/Playmaker3334/NextMID_Web.git
cd NextMID_Web
```

### **2. Crear una Rama Nueva**
```bash
git checkout -b feature-agregar-footer
```

### **3. Realizar Cambios**
Edita `index.html` y guarda los cambios.

### **4. Añadir y Hacer Commit**
```bash
git add index.html
git commit -m "Agregado footer con enlaces sociales"
```

### **5. Subir la Rama al Repositorio Remoto**
```bash
git push origin feature-agregar-footer
```

### **6. Crear una Pull Request en GitHub**
- Ve a GitHub y selecciona tu repositorio.
- Haz clic en **"Compare & pull request"**.
- Escribe una descripción clara del cambio y haz clic en **"Create pull request"**.

### **7. Fusionar la Pull Request**
- Una vez aprobada, haz clic en **"Merge pull request"** y confirma la fusión.

---

## Como descargar archivos de github a mi repositorio local

Primero de todo, analizar el estatus del repositorio
```bash
git status
```
Segundo, anades el archivo que quieras o los archivos que quieras 
```bash
git add app/models/rol_play_sim_extractor.py
```
Tercero, envia el commit 
```bash
git commit -m "Añadir columnas ID_Sim, Puntos_Totales, Calificacion y Caso_de_Uso_Nombre en RolPlaySimExtractor"
```
Si tienes problemas con la merge corre este comando y cancelas la merge
```bash
git merge --abort
```


## 🚀 Conclusión
Ahora tienes una guía completa y clara sobre cómo sincronizar, subir cambios y colaborar en tu repositorio. Con esta estructura bien definida, tu flujo de trabajo será mucho más eficiente y organizado.

Si tienes dudas adicionales o necesitas soporte, no dudes en preguntar. ¡Sigue así y buen trabajo! 🏆
```
