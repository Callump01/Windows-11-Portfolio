import edge from '../assets/icons/taskbar/edge.ico'
import ms_store from '../assets/icons/taskbar/ms_store.png'
import mim from '../assets/icons/taskbar/mim.ico'
import file_explorer from '../assets/icons/taskbar/file_explorer.webp'
import { MSEdgeIcon, MSStoreIcon, SettingsIcon, VSCodeIcon } from '../assets/icons/startmenu'
import { ControlPanel, RecycleBin, ThisPC } from '../assets/icons/Desktop'
import { Apps } from './startMenu.config'
import { VsCodeApp } from '../Apps'
import { MimApp } from '../Apps'
import { AboutMeApp } from '../Apps'
import { ContactMeApp } from '../Apps'

export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
        pinned?: boolean,
        Component?: any,
        height?: number,
        width?: number
    }
}

export const AppsConfig: App = {
    edge: {
        title: "Edge",
        isActive: false,
        icon: MSEdgeIcon,
        pinned: true
    },
    "file-explorer": {
        title: "File Explorer",
        isActive: false,
        icon: file_explorer,
        pinned: true
    },
    "ms-store": {
        title: "Microsoft Store",
        isActive: false,
        icon: MSStoreIcon,
        pinned: true
    },
    "this-pc": {
        title: "This PC",
        isActive: false,
        icon: ThisPC
    },
    "recycle-bin": {
        title: "Recycle Bin",
        isActive: false,
        icon: RecycleBin
    },
	"mim": {
		title: "Microsoft Identity Manager",
		icon: mim,
		isActive: false,
		Component: MimApp,
        height: 700,
        width: 1000
	},
	"about-me": {
		title: "About Me",
		isActive: true,
		icon: ThisPC,
		Component: AboutMeApp,
        height: 800,
        width: 800
	},
	"contact-me": {
		title: "Contact Me",
		isActive: false,
		icon: ThisPC,
		Component: ContactMeApp,
        height: 600,
        width: 800
	},
    "control-panel": {
        title: "Control Panel",
        isActive: false,
        icon: ControlPanel
    },
    "settings": {
        title: "Settings",
        isActive: false,
        icon: SettingsIcon
    },
    "vscode": {
        title: "Visual Studio Code",
        isActive: false,
        icon: VSCodeIcon,
        Component: VsCodeApp,
        height: 500,
        width: 800
    },
    ...Apps(),
} as const