import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Modal from './components/Modal';

interface Example {
    title: string;
    code: string;
}
export interface ComponentData {
    description?: string;
    path: string;
    usage: string;
    examples: Example[];
    propsAndMethods: any,
}

const Data = {
    Checkbox,
    Button,
    Header,
    Modal,
}

export default Data;