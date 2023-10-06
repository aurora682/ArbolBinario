class Node {
    constructor(valor) {
        this.valor=valor;
        this.izquierda=null;
        this.derecha=null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert (valor) {
        const newMode = new Node(valor);

        if(this.root === null) {
            this.root = newMode;
        }else{
            let currentNode = this.root;

            while(true) {
                if(valor < currentNode.valor) {
                    if(currentNode.izquierda === null) {
                        currentNode.izquierda = newMode;
                        return true;
                    }
                    currentNode = currentNode.izquierda;
                }else{
                    if (currentNode.derecha === null) {
                        currentNode.derecha = newMode;
                        return true;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }

    buscar(valor) {
        let currentNode = this.root;

        while(currentNode != null) {
            if (valor === currentNode.valor) {
                return true;
            } else if(valor < currentNode.valor) {
                currentNode =currentNode.izquierda;
            }else{
                currentNode = currentNode.derecha;
            }
        }
        return false;
    }

    buscar(valor) {
        let currentNode = this.root;
        let coincidencias = [];

        while (currentNode !== null) {
            if (valor === currentNode.valor) {
                coincidencias.push(currentNode);
                currentNode = currentNode.izquierda;
            } else if (valor < currentNode.valor) {
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }
        return coincidencias;
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

const coincidencias = tree.buscar(5);
console.log(coincidencias);