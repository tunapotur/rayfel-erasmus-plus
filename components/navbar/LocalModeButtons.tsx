import LocalOperation from './LocalOperation';
import { ModeToggle } from './ModeToggle';

export function LocalModeButtons() {
    return (
        <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:gap-2 lg:flex-row">
            <ModeToggle />
            <LocalOperation />
        </div>
    );
}
