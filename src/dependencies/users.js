function resolveUsers(dependencies) {
    return dependencies
        .map(dependency => {
            dependency.users =
            // @ts-ignore
                Object.entries(dependency.users || [])
                    .map(user => ({ name: user[0], active: user[1] }))
            return dependency
        });
}

module.exports = resolveUsers;