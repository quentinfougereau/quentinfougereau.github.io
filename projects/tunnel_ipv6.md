---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: timeline
---

# Tunnel IPv6 (C)

Le but de ce projet est de permettre des communications entre îlots IPv4 au sein d’un monde IPv6.

Principe du tunnel IPv6 :

![Principe du tunnel IPv6]({{ '/assets/images/principe_tunnel_ipv6.png' }} "Principe du tunnel IPv6")


## Trajet d'un paquet de VM1 vers VM3

1. Un paquet IPv4 est d'abord envoyé depuis VM1 vers VM1-6.
2. La pile réseau de VM1-6 encapsule le paquet IPv4 dans une trame IPv6 puis il est envoyé dans la socket
3. Le paquet arrive sur l'interface eth1 de VM2-6 puis est routé sur le réseau LAN2-6 vers VM3-6
4. La pile réseau de VM3-6 désencapsule le paquet IPv4 de la trame IPv6 puis il est envoyé à VM3


# Prérequis

* Virtualbox (testé sur la version 6.1)
* Vagrant (testé sur la version 2.2.9)


Il faut ajouter la box (hébergée sur VagrantCloud) avec la commande suivante :

    vagrant box add quentinfougereau/debian-tp


# Utilisation

## Etape 1 : Créer et configurer les machines virtuelles

Lancer toutes les machines virtuelles :

    make up-all
    

Sur chacune des machines virtuelles exécuter :

    cd /vagrant
    sudo salt-call state.apply
    sudo NetworkManager start
    
Le mot de passe super-utilisateur est `m1reseaux`

## Etape 2 : Créer le tunnel IPv6

Le tunnel est en fait une connexion client / serveur TCP.

Pour avoir un tunnel bidirectionnel, il faut un client et un serveur sur chacune des extremités (VM1-6 et VM3-6) du reséau IPv6.


Sur VM1-6 :
   
    cd /mnt/partage
    sudo ./tunnel46d config-vm1-6.config config-tun-VM1-6.sh
   

Sur VM3-6 :

    cd /mnt/partage
    sudo ./tunnel46d config-vm3-6.config config-tun-VM3-6.sh

## Etape 3 : Tester le tunnel

Sur VM1 :
    
    ping 172.16.2.183
    
Sur VM3 :

    ping 172.16.2.151
    

On peut vérifier que des paquets transitent par VM2-6 (qui ne communique qu'en IPv6) :

![Paquet TCP VM2-6]({{ '/assets/images/paquet_tcp_vm2-6.png' }} "Paquet TCP VM2-6")


## Etape 4 : Arrêter ou détruire les machines virtuelles

Arrêter toutes les machines

    make halt-all

Détruire toutes les machines (arrête puis détruit)

    make destroy-all
