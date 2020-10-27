---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: timeline
---

Disponible sur [github](https://github.com/quentinfougereau/Scraper_Wordlist).

# Scraper Wordlist (Python)

## Presentation

Cet outil scrap une page d'un site web et créé une wordlist à partir de son contenu.

## Utilisation

    scraper_wordlist.py <url> [-a|-w] <output>

* url: le site à scraper (ie. https://www.python.org/)
* output: le fichier de sortie dans lequel sera écrit le contenu (sous forme de wordlist) (ie. my_wordlist.txt)

* Les options :
  * -a : ajouter au fichier
  * -w : écrire dans le fichier (cette option écrase le contenu du fichier)

Si aucune option n'est renseignée, l'ajout se fait par défaut.

## Exemples

### Sans argument

    scraper_wordlist.py https://www.python.org/ my_wordlist.txt

Cette commande ajoute le nouveau contenu au fichier de sortie. Les doublons ne sont pas ajoutés. Si le file n'existe pas alors il sera créé.

### With -a argument

    scraper_wordlist.py https://www.python.org/ -a my_wordlist.txt

Equivalent à la commande du dessus.

### With -w argument

    scraper_wordlist.py https://www.python.org/ -w my_wordlist.txt

Ce fichier écrit le nouveau contenu dans le fichier. Si le fichier existe alors l'ancien contenu est effacé.

# Notes

Cet outil à été développé durant mon temps libre dans le but de m'améliorer en Python.

Sentez-vous libre de le copier, de le modifier ou bien de le partager !
