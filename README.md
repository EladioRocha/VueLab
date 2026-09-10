# VueLab

Práctica de Vue en el navegador: una lista de tareas en `Tareas-por-hacer/`.

## Archivos

- [Tareas-por-hacer/index.html](Tareas-por-hacer/index.html): página del ejemplo.
- [Tareas-por-hacer/index.js](Tareas-por-hacer/index.js): lógica de la lista de tareas.

## Ejecutar

No hay `package.json` ni un paso de compilación. Desde la raíz, con Python 3 disponible:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000/Tareas-por-hacer/`. Revisa la consola del navegador y la carga de las dependencias externas declaradas en el HTML. No se ha validado la disponibilidad actual de esos servicios.

## Validación

La documentación se contrastó con los archivos del proyecto. El repositorio no contiene una suite de pruebas automatizadas; verifica manualmente las operaciones de la lista antes de modificarla.
