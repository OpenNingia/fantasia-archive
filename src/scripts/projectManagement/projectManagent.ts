// @ts-ignore
import load from "pouchdb-load"
import PouchDB from "pouchdb"
import { extend } from "quasar"
import fetch from "node-fetch";

/**
   * Creates a brand new project and deleted any present data avaiable right now
   * @param projectName The name of the new project
   * @praram vueRouter The vue router object
   */
export const createNewProject = async (projectName: string, vueRouter: any, quasar: any, vueInstance: any) => {
  await removeCurrentProject()

  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }

  window.FA_dbs["project-data"] = new PouchDB("project-data")
  const newProject = {
    _id: "projectSetup",
    projectName: projectName
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.FA_dbs["project-data"].put(newProject)

  /*eslint-disable */
  // @ts-ignore
  vueRouter.push({ path: "/" }).catch((e: {name: string}) => {
    const errorName : string = e.name
    if (errorName === "NavigationDuplicated") {
      return
    }
    console.log(e)
  })
  /* eslint-enable */

  await new Promise(resolve => setTimeout(resolve, 1000))

  /*eslint-disable */
  // @ts-ignore
  vueRouter.push({ path: "/project" }).catch((e: {name: string}) => {
    const errorName : string = e.name
    if (errorName === "NavigationDuplicated") {
      return
    }
    console.log(e)
  })

  quasar.notify({
    type: 'positive',
    message: `New project succesfully created`
  })
  vueInstance.SSET_resetDocuments()
  vueInstance.SSET_resetAllDocuments()
  /* eslint-enable */
}

/**
   * Open an file dialog asking the use for location where to export the project
   * @param projectName The name of the project to export
   */

/**
 * Delete the current project and all its data
 */
export const removeCurrentProject = async () => {
  /*eslint-disable */
    // @ts-ignore
    /*const allDBS = await indexedDB.databases()

    const DBnames: string[] = allDBS
    .filter((d: {name: string}) => d.name !== '_pouch_fa-settings')
    .map((db: {name: string}) => {
      return db.name.replace("_pouch_", "")
    })


    for (const db of DBnames) {
      window.FA_dbs[db] = new PouchDB(db)
      await window.FA_dbs[db].destroy()
    }*/
    /* eslint-enable */
}

/**
 * Opens a dialog to let user pick whatever project they wish to open and lets them select a directory
 * @param vueRouter The vue router object
 */
export const loadExistingProject = (vueRouter: any, Loading: any, loadingSetup: any, quasar: any, vueInstance: any) => {
  /*eslint-disable */
  fetch('/db/info.json').then(async (result) => {

    Loading.show(loadingSetup)

    //await removeCurrentProject()

    if (!window.FA_dbs) {
      // @ts-ignore
      window.FA_dbs = {}
    }    

    // @ts-ignore
    PouchDB.plugin({
      loadIt: load.load
    })

    const allFiles = await result.json()
    console.log('loading all files...')
    
    for (const file of allFiles) {      
      console.log(`fetching ${file.url}`);
      const currentDBName = String(file.name)

      window.FA_dbs[currentDBName] = new PouchDB(currentDBName)
      
      const resp = await fetch(file.url)
      console.log(resp)
      const fileContents = await resp.text()
      console.log(fileContents)

      // @ts-ignore
      await window.FA_dbs[currentDBName].loadIt(fileContents)

    }

    const optionsSnapShot = extend(true, {}, vueInstance.SGET_options)
    // @ts-ignore
    optionsSnapShot.legacyFieldsCheck018 = true
    // @ts-ignore
    optionsSnapShot.pre017check = true
    // @ts-ignore
    vueInstance.SSET_options(optionsSnapShot)

    /*eslint-disable */
    // @ts-ignore
    vueRouter.push({ path: "/" }).catch((e: {name: string}) => {
      const errorName : string = e.name
      if (errorName === "NavigationDuplicated") {
        return
      }
      console.log(e)
    })
    /* eslint-enable */

    await new Promise(resolve => setTimeout(resolve, 1000))

    /*eslint-disable */
    // @ts-ignore
    vueRouter.push({ path: "/project" }).catch((e: {name: string}) => {
      const errorName : string = e.name
      if (errorName === "NavigationDuplicated") {
        return
      }
      console.log(e)
    })

    quasar.notify({
      type: 'positive',
      message: `Project succesfully loaded`
    })

    vueInstance.SSET_resetDocuments()
    vueInstance.SSET_resetAllDocuments()
    /* eslint-enable */
  }).catch(err => {
    console.log(err)
  })
  /* eslint-enable */
}

/**
 * Retrieves current project name
 */
export const retrieveCurrentProjectName = async () => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  const projectName: string = (projectData?.rows[0]?.doc?.projectName) || projectData?.rows[0]?.doc?._id

  return (projectName) || ""
}

/**
 * Change current project name
 */
export const changeCurrentProjectSettings = async (input: {projectName: string}) => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  projectData.rows[0].doc.projectName = input.projectName

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await window.FA_dbs["project-data"].put(projectData.rows[0].doc)
}

/**
 * Save corkboard update
 */
export const saveCorkboard = async (input: string) => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  projectData.rows[0].doc.corkboardText = input.trim()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.FA_dbs["project-data"].put(projectData.rows[0].doc)
}

/**
 * Retrieve corkboard
 */
export const retrieveCorkboard = async (): Promise<string> => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (projectData.rows[0]?.doc.corkboardText) || ""
}

/**
 * Update last opened documents
 */
export const updateLastOpenedDocuments = async (newDocID: string) => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  if (!projectData.rows[0].doc.lastOpenedDocList) {
    projectData.rows[0].doc.lastOpenedDocList = []
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  projectData.rows[0].doc.lastOpenedDocList = [...new Set([
    newDocID,
    ...projectData.rows[0].doc.lastOpenedDocList
  ])].slice(0, 50)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.FA_dbs["project-data"].put(projectData.rows[0].doc).catch(() => console.log())
}

/**
 * Retrieve last opened document IDListr
 */
export const retrieveLastOpenedDocuments = async (): Promise<string[]> => {
  if (!window.FA_dbs) {
    // @ts-ignore
    window.FA_dbs = {}
  }
  window.FA_dbs["project-data"] = new PouchDB("project-data")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const projectData = await window.FA_dbs["project-data"].allDocs({ include_docs: true })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (projectData.rows[0]?.doc?.lastOpenedDocList) || []
}
