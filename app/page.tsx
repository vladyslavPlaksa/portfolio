import { Button } from '@nextui-org/button';

import Topnav from '@/shared/Topnav';

export default function Home() {
    return (
        <div className='h-44'>
            <Topnav />
            <Button>Click me</Button>
        </div>
    );
}
