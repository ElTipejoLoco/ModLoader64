#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = __importDefault(require("commander"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importStar(require("fs"));
var child_process_1 = __importDefault(require("child_process"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var crypto_1 = __importDefault(require("crypto"));
var isElevated = require('is-elevated');
var stripJsonComments = require('strip-json-comments');
var platformkey = '';
if (process.env.PROCESSOR_ARCHITECTURE === undefined) {
    platformkey = process.platform.trim() + 'x64';
}
else {
    platformkey = process.platform.trim() + process.env.PROCESSOR_ARCHITECTURE;
}
commander_1["default"].option('-n, --init', 'init new project');
commander_1["default"].option('-b, --build', 'build mod');
commander_1["default"].option('-r, --run', 'run mod');
commander_1["default"].option('-d, --dist', 'pack mod');
commander_1["default"].option("-2, --runp2", "run p2");
commander_1["default"].option("-u, --update", "update");
commander_1["default"].option("-q, --bumpversion", "bump version number");
commander_1["default"].option("-i, --install <url>", "install dependency");
commander_1["default"].option("-s, --setroms <path>", "set rom directory");
commander_1["default"].option("-c, --clean", "cleans build dirs");
commander_1["default"].option("-a, --modulealias <alias>", "alias a module path");
commander_1["default"].option("-p, --modulealiaspath <path>", "alias a module path");
commander_1["default"].option("-z, --rebuildsdk", "rebuild sdk");
commander_1["default"].option("-t, --template <template>", "make project from template");
commander_1["default"].option("-e, --external <tool>");
commander_1["default"].option("-w, --window gui window");
commander_1["default"].option("-f, --sign <dir>", "sign files in a directory");
commander_1["default"].allowUnknownOption(true);
commander_1["default"].parse(process.argv);
function makeSymlink(src, dest) {
    try {
        var p = path_1["default"].parse(dest);
        if (!fs_1["default"].existsSync(p.dir)) {
            fs_1["default"].mkdirSync(p.dir);
        }
        fs_extra_1["default"].symlinkSync(src, dest, 'junction');
    }
    catch (err) {
        console.log(err);
    }
}
var original_dir = process.cwd();
process.chdir(path_1["default"].join(__dirname, "../"));
if (!fs_1["default"].existsSync("./SDK-config.json")) {
    console.log("This copy of the ModLoader64 SDK appears to have been improperly installed. Please consult the instructions and reinstall.");
}
var sdk_cfg = JSON.parse(fs_1["default"].readFileSync("./SDK-config.json").toString());
process.chdir(original_dir);
var tsconfig_path = path_1["default"].resolve(path_1["default"].join("./", "tsconfig.json"));
var tsconfig;
if (fs_1["default"].existsSync(tsconfig_path)) {
    tsconfig = JSON.parse(stripJsonComments(fs_1["default"].readFileSync(tsconfig_path).toString()));
}
var MOD_REPO_URL = "https://nexus.inpureprojects.info/ModLoader64/repo/mods.json";
var CORE_REPO_URL = "https://nexus.inpureprojects.info/ModLoader64/repo/cores.json";
var GUI_SDK_URL = "https://nexus.inpureprojects.info/ModLoader64/launcher/sdk/win-ia32-unpacked.pak";
var GUI_SDK_URL_UNIX = "https://nexus.inpureprojects.info/ModLoader64/launcher/sdk/linux-unpacked.pak";
// I'm legit just wrapping curl right here... its built into win10 these days should be ok.
function getFileContents(url) {
    return child_process_1["default"].execFileSync('curl', ['--silent', '-L', url], { encoding: 'utf8' });
}
function getBinaryContents(url) {
    return child_process_1["default"].execFileSync('curl', ['-O', '--silent', '-L', url], { encoding: 'utf8' });
}
function saveTSConfig() {
    fs_1["default"].writeFileSync(tsconfig_path, JSON.stringify(tsconfig, null, 2));
}
var WAITING_ON_EXTERNAL = false;
if (commander_1["default"].external !== undefined) {
    var original_dir_1 = process.cwd();
    process.chdir(path_1["default"].join(__dirname, "../"));
    var p = path_1["default"].join(".", "tools", commander_1["default"].external);
    if (fs_1["default"].existsSync(p)) {
        var meta = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(p, "package.json")).toString());
        var s = meta.main;
        var f = path_1["default"].resolve(path_1["default"].join(p, s));
        process.chdir(original_dir_1);
        child_process_1["default"].fork(f, process.argv);
        WAITING_ON_EXTERNAL = true;
    }
    process.chdir(original_dir_1);
}
function updateCores() {
    var original_dir = process.cwd();
    var deps_dir = path_1["default"].join("./", "external_cores");
    if (!fs_extra_1["default"].existsSync(deps_dir)) {
        return;
    }
    process.chdir(deps_dir);
    var cores = [];
    fs_1["default"].readdirSync("./").forEach(function (file) {
        var f = path_1["default"].join("./", file);
        if (fs_1["default"].lstatSync(f).isDirectory()) {
            var b2 = process.cwd();
            process.chdir(path_1["default"].join("./", f));
            cores.push(path_1["default"].resolve("./build/cores"));
            child_process_1["default"].execSync("git reset --hard origin/master");
            child_process_1["default"].execSync("git pull");
            console.log(process.cwd());
            var meta2_1 = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
            console.log("Updating " + meta2_1.name);
            if (meta2_1.hasOwnProperty("dependencies")) {
                Object.keys(meta2_1.dependencies).forEach(function (key) {
                    delete meta2_1.dependencies[key];
                });
            }
            if (meta2_1.hasOwnProperty("devDependencies")) {
                Object.keys(meta2_1.devDependencies).forEach(function (key) {
                    delete meta2_1.dependencies[key];
                });
            }
            fs_extra_1["default"].writeFileSync("./package.json", JSON.stringify(meta2_1, null, 2));
            fs_extra_1["default"].removeSync("./node_modules");
            child_process_1["default"].execSync("npm install");
            child_process_1["default"].execSync("modloader64 -nbd");
            process.chdir(b2);
        }
    });
    process.chdir(original_dir);
}
function installCores() {
    var m_path = "./package.json";
    var meta = JSON.parse(fs_1["default"].readFileSync(m_path).toString());
    if (!meta.hasOwnProperty("modloader64_deps")) {
        meta["modloader64_deps"] = {};
    }
    var mm_path = path_1["default"].join(".", "src", meta.name, "package.json");
    if (!fs_1["default"].existsSync(mm_path)) {
        mm_path = path_1["default"].join(".", "cores", meta.name, "package.json");
    }
    var mod_meta = JSON.parse(fs_1["default"].readFileSync(mm_path).toString());
    if (!mod_meta.hasOwnProperty("modloader64_deps")) {
        mod_meta["modloader64_deps"] = {};
    }
    Object.keys(mod_meta["modloader64_deps"]).forEach(function (key) {
        child_process_1["default"].execSync("modloader64 -i " + mod_meta["modloader64_deps"][key]);
    });
}
function install(url) {
    var _this = this;
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var elv, original_dir, deps_dir, meta, mod_meta, temp, gitdir, target, cores, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isElevated()];
                case 1:
                    elv = _a.sent();
                    /*         if (!elv && platformkey.indexOf("win32") > -1) {
                                console.log("Install must be run as administrator on Windows!");
                                return;
                            } */
                    console.log("Installing " + url + "...");
                    original_dir = process.cwd();
                    deps_dir = path_1["default"].join("./", "external_cores");
                    if (!fs_1["default"].existsSync(deps_dir)) {
                        fs_1["default"].mkdirSync(deps_dir);
                    }
                    meta = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
                    if (!meta.hasOwnProperty("modloader64_deps")) {
                        meta["modloader64_deps"] = {};
                    }
                    mod_meta = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(".", "src", meta.name, "package.json")).toString());
                    if (!mod_meta.hasOwnProperty("modloader64_deps")) {
                        mod_meta["modloader64_deps"] = {};
                    }
                    temp = fs_extra_1["default"].mkdtempSync("ModLoader64SDK_");
                    process.chdir(temp);
                    try {
                        child_process_1["default"].execSync("git clone " + url);
                    }
                    catch (err) {
                        if (err) {
                            console.log("This core is already installed!");
                        }
                    }
                    gitdir = "";
                    fs_extra_1["default"].readdirSync(".").forEach(function (file) {
                        var p = path_1["default"].join(".", file);
                        if (fs_1["default"].lstatSync(p).isDirectory()) {
                            gitdir = path_1["default"].resolve(p);
                        }
                    });
                    process.chdir(original_dir);
                    target = path_1["default"].join(deps_dir, path_1["default"].parse(gitdir).name);
                    fs_extra_1["default"].moveSync(gitdir, target);
                    fs_extra_1["default"].removeSync(temp);
                    cores = [];
                    if (fs_1["default"].lstatSync(target).isDirectory()) {
                        process.chdir(target);
                        child_process_1["default"].execSync("modloader64 --init --build");
                        cores.push(path_1["default"].resolve("./build/cores"));
                        fs_1["default"].readdirSync("./build/cores").forEach(function (file) {
                            var meta2 = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
                            if (!meta["modloader64_deps"].hasOwnProperty(meta2.name)) {
                                meta["modloader64_deps"][meta2.name] = url;
                            }
                            if (!mod_meta["modloader64_deps"].hasOwnProperty(meta2.name)) {
                                mod_meta["modloader64_deps"][meta2.name] = url;
                            }
                            if (tsconfig !== undefined) {
                                if (!tsconfig["compilerOptions"].hasOwnProperty("paths")) {
                                    tsconfig["compilerOptions"]["paths"] = {};
                                }
                                console.log(tsconfig);
                                tsconfig["compilerOptions"]["paths"][meta2.name + "/*"] = [path_1["default"].join("./libs", meta2.name) + "/*"];
                                saveTSConfig();
                            }
                        });
                    }
                    process.chdir(original_dir);
                    fs_1["default"].writeFileSync("./package.json", JSON.stringify(meta, null, 2));
                    fs_1["default"].writeFileSync(path_1["default"].join(".", "src", meta.name, "package.json"), JSON.stringify(mod_meta, null, 2));
                    if (!fs_1["default"].existsSync("./libs")) {
                        fs_1["default"].mkdirSync("./libs");
                    }
                    _loop_1 = function (i) {
                        var c = cores[i];
                        fs_1["default"].readdirSync(c).forEach(function (dir) {
                            var f = path_1["default"].join(c, dir);
                            if (fs_1["default"].lstatSync(f).isDirectory()) {
                                try {
                                    fs_extra_1["default"].symlinkSync(f, path_1["default"].resolve(path_1["default"].join("./libs", path_1["default"].parse(f).name)), 'junction');
                                }
                                catch (err) {
                                    if (err) {
                                        console.log(err);
                                    }
                                }
                            }
                        });
                    };
                    for (i = 0; i < cores.length; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/];
            }
        });
    }); })();
}
if (!WAITING_ON_EXTERNAL) {
    if (commander_1["default"].rebuildsdk) {
        console.log("Rebuilding SDK...");
        var original_dir_2 = process.cwd();
        process.chdir(path_1["default"].join(__dirname, "../"));
        child_process_1["default"].execSync("npm install");
        process.chdir(original_dir_2);
    }
    if (commander_1["default"].init) {
        var original_dir_3 = process.cwd();
        console.log("Generating mod scaffolding...");
        child_process_1["default"].execSync("npm init --yes");
        var meta = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
        if (!fs_1["default"].existsSync("./src")) {
            fs_1["default"].mkdirSync("./src");
            fs_1["default"].mkdirSync("./src/" + meta.name);
            process.chdir("./src/" + meta.name);
            child_process_1["default"].execSync("npm init --yes");
        }
        try {
            process.chdir("./src/" + meta.name);
            child_process_1["default"].execSync("npm install");
        }
        catch (err) { }
        process.chdir(original_dir_3);
        var mod_pkg_1 = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(".", "package.json")).toString());
        if (mod_pkg_1.hasOwnProperty("dependencies")) {
            Object.keys(mod_pkg_1.dependencies).forEach(function (key) {
                delete mod_pkg_1.dependencies[key];
            });
        }
        if (mod_pkg_1.hasOwnProperty("devDependencies")) {
            Object.keys(mod_pkg_1.devDependencies).forEach(function (key) {
                delete mod_pkg_1.dependencies[key];
            });
        }
        fs_1["default"].writeFileSync(path_1["default"].join(".", "package.json"), JSON.stringify(mod_pkg_1, null, 2));
        child_process_1["default"].execSync("npm install");
        if (!fs_1["default"].existsSync("./node_modules")) {
            fs_1["default"].mkdirSync("./node_modules");
        }
        console.log("Linking ModLoader64 API to project...");
        console.log("This might take a moment. Please be patient.");
        var our_pkg = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(__dirname, "../", "package.json")).toString());
        Object.keys(our_pkg.dependencies).forEach(function (key) {
            makeSymlink(path_1["default"].resolve(__dirname, "../", "node_modules", key), path_1["default"].resolve(original_dir_3, "node_modules", key));
        });
        Object.keys(our_pkg.devDependencies).forEach(function (key) {
            makeSymlink(path_1["default"].resolve(__dirname, "../", "node_modules", key), path_1["default"].resolve(original_dir_3, "node_modules", key));
        });
        makeSymlink(path_1["default"].resolve(__dirname, "../", "node_modules", "modloader64_api"), path_1["default"].resolve(original_dir_3, "node_modules", "modloader64_api"));
        console.log("Setting up TypeScript compiler...");
        child_process_1["default"].execSync("npx tsc --init");
        fs_1["default"].copyFileSync(path_1["default"].join(__dirname, "../", "tsconfig.json"), "./tsconfig.json");
        if (fs_1["default"].existsSync(tsconfig_path)) {
            tsconfig = JSON.parse(stripJsonComments(fs_1["default"].readFileSync(tsconfig_path).toString()));
        }
        tsconfig["compilerOptions"]["paths"]["@" + meta.name + "/*"] = ["./src/" + meta.name + "/*"];
        saveTSConfig();
        console.log("Installing any required cores...");
        installCores();
    }
    if (commander_1["default"].setroms !== undefined) {
        sdk_cfg.ModLoader64.SDK.roms_dir = path_1["default"].resolve(commander_1["default"].setroms);
        var original_dir_4 = process.cwd();
        process.chdir(path_1["default"].join(__dirname, "../"));
        fs_1["default"].writeFileSync("./SDK-config.json", JSON.stringify(sdk_cfg, null, 2));
        process.chdir(original_dir_4);
    }
    if (commander_1["default"].bumpversion) {
        var original_dir_5 = process.cwd();
        child_process_1["default"].execSync("npm version --no-git-tag-version patch");
        var meta = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
        var p = "./src/" + meta.name;
        process.chdir(p);
        child_process_1["default"].execSync("npm version --no-git-tag-version patch");
        meta = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
        console.log("New version number: " + meta.version);
        process.chdir(original_dir_5);
    }
    if (commander_1["default"].clean) {
        fs_extra_1["default"].removeSync("./build");
        fs_extra_1["default"].removeSync("./build2");
        fs_extra_1["default"].removeSync("./dist");
    }
    if (commander_1["default"].build) {
        var original_dir_6 = process.cwd();
        var meta = path_1["default"].join(process.cwd(), "package.json");
        var m = JSON.parse(fs_1["default"].readFileSync(meta).toString());
        console.log("Building mod. Please wait...");
        if (!fs_1["default"].existsSync("./cores")) {
            fs_1["default"].mkdirSync("./cores");
        }
        if (m.hasOwnProperty("scripts")) {
            if (m.scripts.hasOwnProperty("ML64Prebuild")) {
                console.log("Executing prebuild script...");
                console.log(child_process_1["default"].execSync("npm run ML64Prebuild").toString());
            }
        }
        try {
            child_process_1["default"].execSync("npx tsc");
        }
        catch (err) {
            if (err) {
                throw Error(err.stdout.toString());
            }
        }
        fs_extra_1["default"].copySync("./src", "./build/src");
        if (!fs_1["default"].existsSync("./build/cores")) {
            fs_1["default"].mkdirSync("./build/cores");
        }
        if (!fs_1["default"].existsSync("./libs")) {
            fs_1["default"].mkdirSync("./libs");
        }
        fs_extra_1["default"].copySync("./cores", "./build/cores");
        fs_extra_1["default"].copySync("./build/cores", "./libs");
        fs_1["default"].readdirSync("./libs").forEach(function (file) {
            var p = path_1["default"].join("./libs", file);
            if (fs_1["default"].lstatSync(p).isDirectory()) {
                child_process_1["default"].execSync("npm link --local " + p);
            }
        });
        if (m.hasOwnProperty("scripts")) {
            if (m.scripts.hasOwnProperty("ML64Postbuild")) {
                console.log("Executing postbuild script...");
                console.log(child_process_1["default"].execSync("npm run ML64Postbuild").toString());
            }
        }
        process.chdir(original_dir_6);
    }
    if (commander_1["default"].sign) {
        var recursive = require("recursive-readdir");
        var original_dir_7 = process.cwd();
        recursive(commander_1["default"].sign, function (err, files) {
            for (var i = 0; i < files.length; i++) {
                var _path = path_1["default"].resolve(files[i]);
                var _parse = path_1["default"].parse(files[i]);
                if (_parse.dir.indexOf("node_modules") > -1)
                    continue;
                if (_parse.ext === ".js") {
                    var data = fs_1["default"].readFileSync(_path);
                    var private_key = fs_extra_1["default"].readFileSync(path_1["default"].resolve(__dirname, "..", "privateKey.pem"), 'utf-8');
                    var signer = crypto_1["default"].createSign('sha256');
                    signer.update(data);
                    signer.end();
                    var signature = signer.sign(private_key);
                    fs_1["default"].writeFileSync(_path.replace(".js", ".mls"), JSON.stringify({ sig: signature.toString('base64'), code: data.toString('base64') }));
                    fs_1["default"].unlinkSync(_path);
                }
                else if (_path.indexOf(".js.map") > -1 || _parse.ext === ".ts") {
                    fs_1["default"].unlinkSync(_path);
                }
            }
        });
        process.chdir(original_dir_7);
    }
    if (commander_1["default"].run) {
        console.log("Running mod. Please wait while we load the emulator...");
        var original_dir_8 = process.cwd();
        if (commander_1["default"].window) {
            var isWindows = platformkey.indexOf("win32") > -1;
            var url = GUI_SDK_URL;
            if (!isWindows) {
                url = GUI_SDK_URL_UNIX;
            }
            var dir = "./win-ia32-unpacked";
            if (!isWindows) {
                dir = "./linux-unpacked";
            }
            var exe = "modloader64 gui.exe";
            if (!isWindows) {
                exe = "modloader64 gui";
            }
            process.chdir(original_dir_8);
            var file = dir + ".pak";
            if (!fs_1["default"].existsSync(file)) {
                console.log("Downloading GUI files...");
                getBinaryContents(url);
            }
            if (!fs_1["default"].existsSync(dir)) {
                child_process_1["default"].execSync("paker -i " + file + " -o ./");
            }
            if (!fs_1["default"].existsSync(path_1["default"].resolve(dir, "ModLoader"))) {
                process.chdir(dir);
                console.log(process.cwd());
                child_process_1["default"].execSync("\"" + exe + "\"");
                process.chdir(original_dir_8);
                fs_extra_1["default"].removeSync(path_1["default"].resolve(dir, "ModLoader/roms"));
                fs_extra_1["default"].symlinkSync(path_1["default"].resolve(sdk_cfg.ModLoader64.SDK.roms_dir), path_1["default"].resolve(dir, "ModLoader/roms"));
                process.exit(1);
            }
            if (fs_extra_1["default"].existsSync(path_1["default"].resolve(dir, "ModLoader/ModLoader64-config.json"))) {
                if (!fs_1.lstatSync(path_1["default"].resolve(dir, "ModLoader/ModLoader64-config.json")).isSymbolicLink()) {
                    process.chdir(original_dir_8);
                    fs_extra_1["default"].removeSync(path_1["default"].resolve(dir, "ModLoader/ModLoader64-config.json"));
                    fs_extra_1["default"].symlinkSync(path_1["default"].resolve("./ModLoader64-config.json"), path_1["default"].resolve(dir, "ModLoader/ModLoader64-config.json"));
                }
            }
            fs_extra_1["default"].removeSync(path_1["default"].resolve(dir, "ModLoader/mods"));
            fs_extra_1["default"].copySync("./build/src", path_1["default"].resolve(dir, "ModLoader/mods"));
            process.chdir(dir);
            child_process_1["default"].execSync("\"" + exe + "\" --devSkip");
            process.chdir(original_dir_8);
        }
        else {
            process.chdir(path_1["default"].join(__dirname, "../"));
            var ml = child_process_1["default"].exec("npm run start -- --mods=" + path_1["default"].join(original_dir_8, "build", "src") + " --roms=" + path_1["default"].resolve(sdk_cfg.ModLoader64.SDK.roms_dir) + " --cores=" + path_1["default"].join(original_dir_8, "libs") + " --config=" + path_1["default"].join(original_dir_8, "modloader64-config.json") + " --startdir " + original_dir_8);
            ml.stdout.on('data', function (data) {
                console.log(data);
            });
            ml.on('error', function (err) {
                console.log(err);
            });
            ml.stderr.on('data', function (data) {
                console.log(data);
            });
        }
        process.chdir(original_dir_8);
    }
    if (commander_1["default"].dist) {
        var original_dir_9 = process.cwd();
        var fsExtra = require('fs-extra');
        fsExtra.emptyDirSync("./dist");
        if (!fs_1["default"].existsSync("./dist")) {
            fs_1["default"].mkdirSync("./dist");
        }
        var f1_1 = path_1["default"].join(__dirname, "../");
        fs_extra_1["default"].copySync("./build/src", "./dist");
        fs_extra_1["default"].copySync("./build/cores", "./dist");
        process.chdir(path_1["default"].join(".", "dist"));
        fs_1["default"].readdirSync(".").forEach(function (file) {
            var p = path_1["default"].join(".", file);
            console.log(p);
            if (fs_1["default"].lstatSync(p).isDirectory()) {
                var meta = path_1["default"].join(p, "package.json");
                var alg = "";
                var m = JSON.parse(fs_1["default"].readFileSync(meta).toString());
                if (m.hasOwnProperty("compression")) {
                    alg = "--algo=" + m["compression"];
                }
                child_process_1["default"].execSync("node \"" + path_1["default"].join(f1_1, "/bin/paker.js") + "\" --dir=\"" + "./" + p + "\" --output=\"" + "./" + "\" " + alg);
                console.log("Generated pak for " + file + ".");
            }
        });
        process.chdir(original_dir_9);
    }
    if (commander_1["default"].runp2) {
        console.log("Running mod. Please wait while we load the emulator...");
        var original_dir_10 = process.cwd();
        var cfg = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(original_dir_10, "modloader64-config.json")).toString());
        cfg["ModLoader64"]["isServer"] = false;
        cfg["NetworkEngine.Client"]["isSinglePlayer"] = false;
        fs_1["default"].writeFileSync(path_1["default"].join(original_dir_10, "modloader64-p2-config.json"), JSON.stringify(cfg, null, 2));
        process.chdir(path_1["default"].join(__dirname, "../"));
        var ml = child_process_1["default"].exec("npm run start_2 -- --mods=" + path_1["default"].join(original_dir_10, "build", "src") + " --roms=" + path_1["default"].resolve(sdk_cfg.ModLoader64.SDK.roms_dir) + " --cores=" + path_1["default"].join(original_dir_10, "libs") + " --config=" + path_1["default"].join(original_dir_10, "modloader64-p2-config.json") + " --startdir " + original_dir_10);
        console.log("npm run start_2 -- --mods=" + path_1["default"].join(original_dir_10, "build", "src") + " --roms=" + path_1["default"].resolve(sdk_cfg.ModLoader64.SDK.roms_dir) + " --cores=" + path_1["default"].join(original_dir_10, "libs") + " --config=" + path_1["default"].join(original_dir_10, "modloader64-p2-config.json") + " --startdir " + original_dir_10);
        ml.stdout.on('data', function (data) {
            console.log(data);
        });
        ml.on('error', function (err) {
            console.log(err);
        });
        ml.stderr.on('data', function (data) {
            console.log(data);
        });
        process.chdir(original_dir_10);
    }
    if (commander_1["default"].update) {
        var original_dir_11 = process.cwd();
        process.chdir(path_1["default"].join(__dirname, "../"));
        console.log("Updating ModLoader64...");
        child_process_1["default"].execSync("git reset --hard origin/master");
        child_process_1["default"].execSync("git pull");
        fs_extra_1["default"].removeSync("./node_modules");
        fs_extra_1["default"].removeSync("./Mupen64Plus");
        if (fs_extra_1["default"].existsSync("./build")) {
            fs_extra_1["default"].removeSync("./build");
        }
        if (fs_extra_1["default"].existsSync("./build2")) {
            fs_extra_1["default"].removeSync("./build2");
        }
        var ml = child_process_1["default"].exec("npm install");
        ml.stdout.on('data', function (data) {
            console.log(data);
        });
        ml.on('exit', function () {
            process.chdir(original_dir_11);
            updateCores();
        });
    }
    if (commander_1["default"].install !== undefined) {
        if (commander_1["default"].install.indexOf("https://") > -1) {
            install(commander_1["default"].install);
        }
        else {
            console.log("Searching the nexus...");
            var core_repo = JSON.parse(getFileContents(CORE_REPO_URL));
            var mod_repo = JSON.parse(getFileContents(MOD_REPO_URL));
            if (Object.keys(core_repo).indexOf(commander_1["default"].install) > -1) {
                console.log("Found " + commander_1["default"].install + " in cores repo.");
                install(core_repo[commander_1["default"].install].git);
            }
            else if (Object.keys(mod_repo).indexOf(commander_1["default"].install) > -1) {
                console.log("Found " + commander_1["default"].install + " in mods repo.");
                console.log("Installing pak file...");
                var update = JSON.parse(getFileContents(mod_repo[commander_1["default"].install].url));
                getBinaryContents(update.url);
            }
        }
    }
    if (commander_1["default"].modulealiaspath !== undefined) {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var elv, p, p2, p_1, p2_1, meta, mod_meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, isElevated()];
                    case 1:
                        elv = _a.sent();
                        if (!elv && platformkey.indexOf("win32") > -1) {
                            console.log("Alias must be run as administrator on Windows!");
                            return [2 /*return*/];
                        }
                        if (!fs_1["default"].existsSync("./libs")) {
                            fs_1["default"].mkdirSync("./libs");
                        }
                        p = path_1["default"].resolve(commander_1["default"].modulealiaspath);
                        p2 = path_1["default"].resolve(path_1["default"].join("./libs", path_1["default"].parse(p).name));
                        if (fs_1["default"].lstatSync(p).isDirectory()) {
                            fs_extra_1["default"].symlinkSync(p, p2);
                        }
                        console.log("Created alias for " + commander_1["default"].modulealiaspath + " -> " + commander_1["default"].modulealias);
                        if (commander_1["default"].modulealias !== undefined) {
                            p_1 = path_1["default"].resolve(commander_1["default"].modulealiaspath);
                            p2_1 = path_1["default"].resolve(path_1["default"].join("./libs", path_1["default"].parse(p_1).name));
                            meta = JSON.parse(fs_1["default"].readFileSync("./package.json").toString());
                            mod_meta = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(".", "src", meta.name, "package.json")).toString());
                            if (!mod_meta.hasOwnProperty("modloader64_aliases")) {
                                mod_meta["modloader64_aliases"] = {};
                            }
                            //mod_meta["modloader64_aliases"]["@" + program.modulealias + "/*"] = [path.relative("./", p2) + "/*"];
                            //fs.writeFileSync(path.join(".", "src", meta.name, "package.json"), JSON.stringify(mod_meta, null, 2));
                            // TSConfig.
                            tsconfig["compilerOptions"]["paths"]["@" + commander_1["default"].modulealias + "/*"] = [path_1["default"].relative("./", p2_1) + "/*"];
                            saveTSConfig();
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    if (commander_1["default"].template !== undefined) {
        if (fs_extra_1["default"].existsSync("./external_cores/" + commander_1["default"].template)) {
            var t_path = path_1["default"].join("./", "external_cores", commander_1["default"].template);
            var meta = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(t_path, "package.json")).toString());
            var m_path = path_1["default"].join(t_path, "src", meta.name);
            var meta2 = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(".", "package.json")).toString());
            fs_extra_1["default"].copySync(m_path, path_1["default"].join(".", "src", meta2.name), {});
            var meta3 = JSON.parse(fs_1["default"].readFileSync(path_1["default"].join(".", "src", meta2.name, "package.json")).toString());
            meta3.name = meta2.name;
            fs_extra_1["default"].writeFileSync(path_1["default"].join(".", "src", meta2.name, "package.json"), JSON.stringify(meta3, null, 2));
        }
        else {
            console.log("Install the template first.");
        }
    }
}
