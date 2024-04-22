--[[--
The Configuration class is responsible for managing the addon's
configuration, settings, options, and anything else that can be persisted
in the table used by the game client to store saved variables.

It provides methods to easily access and manipulate the configuration
properties. That reduces the need to pollute the addon code with sanity
checks, index initializations, etc.

@classmod Core.Configuration
]]
local Configuration = {}
    Configuration.__index = Configuration
    Configuration.__ = self

    --[[--
    Configuration constructor.

    The configuration instance expects a table with the configuration data
    which is also referenced in the TOC file. That way, each instance of this
    class will handle a saved variable.

    Stormwind Library will automatically create an instance of this class
    when the addon is loaded in case a table is referenced in the addon's
    properties, however, if the addon needs to have multiple configurations,
    one instance of this class should be created for each table.

    @tparam table savedVariable The configuration data to be used by the addon.
            This table instance must be the same one referenced in
            the TOC SavedVariables property.
    ]]
    function Configuration.__construct(savedVariable)
        local self = setmetatable({}, Configuration)

        self.data = savedVariable

        return self
    end

    --[[--
    Gets a configuration property by a key or returns a default value if the
    key does not exist.

    @tparam string key The key to be used to retrieve the configuration property.
    @param any default The default value to be returned if the key does not exist.

    @treturn any The configuration property value or the default value if the
                 key does not exist.
    
    @usage
        library.configuration:get('test-property', 'default-value')
    ]]
    function Configuration:get(key, default)
        -- @TODO: Implement this method <2024.04.22>
    end
-- end of Configuration

self:addClass('Configuration', Configuration)