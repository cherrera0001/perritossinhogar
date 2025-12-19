# Política de Seguridad

## Versiones Soportadas

Utilizamos versionado semántico y mantenemos actualizadas las siguientes versiones:

| Versión | Estado de Soporte          |
| ------- | -------------------------- |
| Latest  | :white_check_mark: Activo  |
| < Latest | :x: No soportado           |

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad, por favor **NO** crees un issue público. En su lugar, sigue estos pasos:

### Proceso de Reporte

1. **Contacto Directo**: Envía un email a `security@perritossinhogar.cl` o crea un [Security Advisory privado](https://github.com/cherrera0001/perritossinhogar/security/advisories/new) en GitHub.

2. **Información Requerida**:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducir el problema
   - Impacto potencial
   - Versión afectada
   - Sugerencias de mitigación (si las tienes)

3. **Tiempo de Respuesta**:
   - Confirmación inicial: 48 horas
   - Evaluación: 7 días
   - Parche o actualización: Depende de la severidad

4. **Divulgación Responsable**:
   - No divulgaremos la vulnerabilidad públicamente hasta que se haya corregido
   - Te daremos crédito por el descubrimiento (si lo deseas)
   - Coordinaremos la divulgación pública después del fix

## Severidad de Vulnerabilidades

Utilizamos el sistema [CVSS v3.1](https://www.first.org/cvss/) para clasificar vulnerabilidades:

- **Crítica (9.0-10.0)**: Ejecución remota de código, acceso no autorizado completo
- **Alta (7.0-8.9)**: Acceso a datos sensibles, denegación de servicio significativa
- **Media (4.0-6.9)**: Exposición de información limitada, escalación de privilegios local
- **Baja (0.1-3.9)**: Problemas menores de seguridad, mejoras de seguridad

## Proceso de Corrección

1. **Confirmación**: Verificamos y confirmamos la vulnerabilidad
2. **Desarrollo**: Desarrollamos un fix o parche
3. **Pruebas**: Probamos el fix exhaustivamente
4. **Despliegue**: Desplegamos el fix en producción
5. **Divulgación**: Publicamos un Security Advisory en GitHub

## Mejores Prácticas de Seguridad

### Para Desarrolladores

- Mantén las dependencias actualizadas
- Revisa los Security Advisories regularmente
- Usa `pnpm audit` antes de cada commit
- No commitees secretos o credenciales
- Revisa el código de otros antes de hacer merge

### Para Usuarios

- Mantén tu aplicación actualizada
- Revisa los Security Advisories de GitHub
- Reporta vulnerabilidades de forma responsable
- No compartas credenciales o tokens

## Historial de Seguridad

### CVE-2025-55182 / CVE-2025-66478 (React2Shell) - 10 de diciembre de 2025

**Severidad**: Crítica  
**Estado**: Corregido  
**Versiones Afectadas**:
- Next.js: 16.0.0
- React: 19.2.0
- react-dom: 19.2.0

**Versiones Corregidas**:
- Next.js: 16.0.7
- React: 19.2.1
- react-dom: 19.2.1

**Acción Tomada**: Actualización inmediata de todas las dependencias vulnerables.

## Recursos Adicionales

- [GitHub Security Advisories](https://github.com/cherrera0001/perritossinhogar/security/advisories)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security](https://react.dev/learn/escape-hatches#security)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)

## Contacto

Para preguntas sobre seguridad que no sean vulnerabilidades:
- Email: `hola@perritossinhogar.cl`
- GitHub Issues: Para problemas no relacionados con seguridad

---

**Última actualización**: 10 de diciembre de 2025

