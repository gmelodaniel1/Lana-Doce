# 01: Salvar e Sanitizar os Assets Brutos (Raw Ingestion & Audit)

**What to build:** Migrar todos os arquivos brutos de sprites que estão na pasta volátil `dist/assets/sprites/` para uma pasta de desenvolvimento segura e versionável (`raw_assets/sprites/`). Sanitizar nomes de arquivos eliminando acentuações e caracteres especiais para evitar problemas em ambientes web/Linux, e executar um script de auditoria que cataloga dimensões, cores de fundo, estimativa de poses e detecção de sobreposição.

**Blocked by:** None (can start immediately)

**Status:** done

- [x] Criar estrutura de diretórios `raw_assets/sprites/<characterId>/` e mover os arquivos brutos com segurança para fora de `dist/`
- [x] Sanitizar nomes de arquivos (remover diacríticos como 'ã', 'é', 'í', corrigir erros de digitação e padronizar casing)
- [x] Criar script executável `scripts/ingest_and_audit_sprites.py` para inspecionar dimensões, proporção, fundo e bounding boxes das poses
- [x] Gerar relatório de auditoria `raw_assets/sprites/SPRITE_AUDIT.md` e `sprite_audit.json` classificando sprites limpos vs sobrepostos/complexos
