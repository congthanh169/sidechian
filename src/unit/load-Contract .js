

export const loadContract = async (name) => {
    const res = await fetch(`/contracts/${name}.json`)
    const Artifacts = await res.json()

    return {
        contract: Artifacts
    }
}