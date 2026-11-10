# Learn THREE.js

My exercises from following the [Three.js Journey](https://threejs-journey.com/) course by Bruno Simon, organized as a pnpm workspace. Each lesson in `chapters/<chapter>/<lesson>` is its own Vite project, named `ch<chapter>-<lesson>` (for example, `ch01-05`).

Dependency versions are kept in one place: the `catalog:` section of [pnpm-workspace.yaml](pnpm-workspace.yaml). Projects refer to them as `"catalog:"` in their `package.json`, so every project uses the same version.

## Setup

```sh
pnpm install
```

Run this from the root directory. It installs dependencies for every project.

## Adding packages

### To the main (root) repo

```sh
pnpm add -w --save-catalog <package>
```

- `-w` (`--workspace-root`) adds the package to the root `package.json`.
- `--save-catalog` adds the version to the catalog in `pnpm-workspace.yaml` and saves the dependency as `"catalog:"`.

Add `-D` to save it as a dev dependency:

```sh
pnpm add -w -D --save-catalog <package>
```

### To a single project

From the root directory, use `--filter` with the project's name:

```sh
# Package already in the catalog (e.g. three, gsap)
pnpm --filter ch01-05 add <package>@catalog:

# New package: add it to the catalog and the project
pnpm --filter ch01-05 add --save-catalog <package>
```

Or from inside the project directory:

```sh
cd chapters/01/05
pnpm add <package>@catalog:            # already in the catalog
pnpm add --save-catalog <package>      # new package
```

Add `-D` to either form for a dev dependency.

## Running a project

### From the root directory

```sh
pnpm --filter ch01-05 dev      # start the dev server
pnpm --filter ch01-05 build    # production build
```

### From the project directory

```sh
cd chapters/01/05
pnpm dev
pnpm build
```

## Adding a new lesson

1. Copy an existing lesson folder, e.g. `chapters/01/05` → `chapters/01/06`.
2. Change `name` (and `description`) in the new `package.json` to `ch01-06`.
3. Run `pnpm install` from the root.

New folders under `chapters/*/*` are picked up as workspace projects automatically.
