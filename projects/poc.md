---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: timeline
---

Disponible sur [github](https://github.com/quentinfougereau/Poc).

# Petit outil de confidentialité (Java)


Ce programme est un outil de chiffrement simple d'utilisation développé en Java. 

Le chiffrement d'un document se déroule en deux parties :

1. le document est chiffré grâce à l'algorithme AES en mode CBC et avec bourrage PKSC5
2. la clé AES est chiffrée en RSA grâce à une clé publique de 1024 bits et avec un bourrage PKSC1

Principe du chiffrement hybride (POC)

![Principe du chiffrement hybride]({{ '/assets/images/principe_chiffrement_poc.png' }} "Principe du chiffrement hybride")


Principe du déchiffrement hybride (dPOC)

![Principe du déchiffrement hybride]({{ '/assets/images/principe_dechiffrement_dpoc.png' }} "Principe du déchiffrement hybride")

# Architecture

Le répertoire `POC` contient les classes Java permettant le chiffrement. Il est divisé en deux sous-dossiers :

* le dossier `POC/G1` contient les scripts de chiffrement réalisés à l'aide de l'API Java Cryptography Extension (JCE)
* le dossier `POC/G2` contient les scripts de chiffrement réalisés "à la main", c'est à dire sans JCE


Le répertoire `dPOC` contient les classes Java permettant le déchiffrement (avec JCE).

# Utilisation

## Chiffrement (avec JCE)

    cd POC/G1
    java POC <fichier>
    
Exemple : `java POC butokuden.jpg`

Cela va générer un fichier dans le répertoire courant nommé butokuden-encrypted.jpg.

## Chiffrement (sans JCE)

    cd POC/G2
    java POC <fichier>
    
Exemple : `java POC butokuden.jpg`

Cela va générer un fichier dans le répertoire courant nommé butokuden-encrypted.jpg.

## Déchiffrement

Le mot de passe utilisé pour le déchiffrement est `KYOTO`.

    cd dPOC/
    java dPOC <fichier> <mot de passe>
    
Exemple : `java dPOC butokuden-encrypted.jpg KYOTO`

Cela va générer un fichier dans le répertoire courant nommé butokuden-decrypted.jpg.