TestSettings = BaseTestClass:new()

-- @covers Settings:__construct()
TestCase.new()
    :setName('__construct')
    :setTestClass(TestSettings)
    :setExecution(function()
        local instance = __:new('Settings')

        lu.assertEquals({}, instance.settingGroups)
        lu.assertNotNil(instance)
    end)
    :register()

-- @covers Settings:addSetting()
TestCase.new()
    :setName('addSetting')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local instance = Spy
            .new(__:new('Settings'))
            :mockMethod('maybeAddGeneralGroup')

        local setting = __:new('Setting')

        local settingGroup = Spy
            .new(__:new('SettingGroup'))
            :mockMethod('addSetting')

        instance.settingGroups = { [data.expectedGroupToUse] = settingGroup }

        instance:addSetting(setting, data.group)

        instance
            :getMethod('maybeAddGeneralGroup')
            :assertCalledOnce()

        settingGroup
            :getMethod('addSetting')
            :assertCalledOnceWith(setting)
    end)
    :setScenarios({
        ['group ommited'] = {
            group = nil,
            expectedGroupToUse = 'general',
        },
        ['group provided'] = {
            group = 'group',
            expectedGroupToUse = 'group',
        },
    })
    :register()

-- @covers Settings:addSettingGroup()
TestCase.new()
    :setName('addSettingGroup')
    :setTestClass(TestSettings)
    :setExecution(function()
        local instance = __:new('Settings')

        local settingGroup = __:new('SettingGroup'):setId('group')

        instance:addSettingGroup(settingGroup)

        lu.assertEquals(settingGroup, instance.settingGroups['group'])
    end)
    :register()

-- @covers Settings:all()
TestCase.new()
    :setName('all')
    :setTestClass(TestSettings)
    :setExecution(function()
        local settings = Spy
            .new(__:new('Settings'))
            :mockMethod('listSettings')

        settings:all()

        settings
            :getMethod('listSettings')
            :assertCalledOnceWith('all')
    end)
    :register()

-- @covers Settings:allAccessibleByCommand()
TestCase.new()
    :setName('allAccessibleByCommand')
    :setTestClass(TestSettings)
    :setExecution(function()
        local settings = Spy
            .new(__:new('Settings'))
            :mockMethod('listSettings')

        settings:allAccessibleByCommand()

        settings
            :getMethod('listSettings')
            :assertCalledOnceWith('allAccessibleByCommand')
    end)
    :register()

-- @covers Settings:hasSettings()
TestCase.new()
    :setName('hasSettings')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local settings = __:new('Settings')

        settings.settingGroups = data.settingGroups

        lu.assertEquals(data.expectedResult, settings:hasSettings(data.method))
    end)
    :setScenarios({
        ['no groups'] = {
            settingGroups = {},
            expectedResult = false,
        },
        ['groups have no settings'] = function()
            local settingGroupA = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettings', function() return false end)

            local settingGroupB = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettings', function() return false end)
            
            return {
                settingGroups = {
                    ['setting-group-a'] = settingGroupA,
                    ['setting-group-b'] = settingGroupB,
                },
                expectedResult = false,
            }
        end,
        ['one group has settings'] = function()
            local settingGroupA = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettings', function() return false end)

            local settingGroupB = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettings', function() return true end)
            
            return {
                settingGroups = {
                    ['setting-group-a'] = settingGroupA,
                    ['setting-group-b'] = settingGroupB,
                },
                expectedResult = true,
            }
        end,
        ['use another method'] = function()
            local settingGroupA = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettingsWithAnotherFilter', function() return false end)

            local settingGroupB = Spy
                .new(__:new('SettingGroup'))
                :mockMethod('hasSettingsWithAnotherFilter', function() return true end)
            
            return {
                settingGroups = {
                    ['setting-group-a'] = settingGroupA,
                    ['setting-group-b'] = settingGroupB,
                },
                method = 'hasSettingsWithAnotherFilter',
                expectedResult = true,
            }
        end,
    })
    :register()

-- @covers Settings:hasSettingsAccessibleByCommand()
TestCase.new()
    :setName('hasSettingsAccessibleByCommand')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local settings = Spy
            .new(__:new('Settings'))
            :mockMethod('hasSettings', function() return true end)

        local result = settings:hasSettingsAccessibleByCommand()

        lu.assertIsTrue(result)

        settings
            :getMethod('hasSettings')
            :assertCalledOnceWith('hasSettingsAccessibleByCommand')
    end)
    :register()

-- @covers Settings:listSettings()
TestCase.new()
    :setName('listSettings')
    :setTestClass(TestSettings)
    :setExecution(function()
        local instance = __:new('Settings')

        local settingGroupA = Spy
            .new(__:new('SettingGroup'))
            :mockMethod('getFilteredSettings', function() return { 'setting-a1', 'setting-a2' } end)

        local settingGroupB = Spy
            .new(__:new('SettingGroup'))
            :mockMethod('getFilteredSettings', function() return { 'setting-b1', 'setting-b2' } end)

        instance.settingGroups = {
            ['setting-group-a'] = settingGroupA,
            ['setting-group-b'] = settingGroupB,
        }

        local allSettings = instance:listSettings('getFilteredSettings')

        lu.assertIsTrue(__.arr:inArray(allSettings, 'setting-a1'))
        lu.assertIsTrue(__.arr:inArray(allSettings, 'setting-a2'))
        lu.assertIsTrue(__.arr:inArray(allSettings, 'setting-b1'))
        lu.assertIsTrue(__.arr:inArray(allSettings, 'setting-b2'))
    end)
    :register()

-- @covers Settings:mapFromAddonProperties()
TestCase.new()
    :setName('mapFromAddonProperties')
    :setTestClass(TestSettings)
    :setExecution(function()
        -- @TODO: Implement this method in AP2 <2024.09.09>
    end)
    :register()

-- @covers Settings:maybeAddGeneralGroup()
TestCase.new()
    :setName('maybeAddGeneralGroup')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local instance = __:new('Settings')

        instance.settingGroups = data.settingGroups

        instance:maybeAddGeneralGroup()

        lu.assertEquals(data.expectedGroupId, instance.settingGroups['general'].id)
        lu.assertEquals(data.expectedGroupLabel, instance.settingGroups['general'].label)
    end)
    :setScenarios({
        ['already exists'] = function()
            local generalSettingGroup = __
                :new('SettingGroup')
                :setId('general-overridden')
                :setLabel('General Overridden')
            
            return {
                settingGroups = {
                    ['general'] = generalSettingGroup,
                },
                expectedGroupId = 'general-overridden',
                expectedGroupLabel = 'General Overridden',
            }
        end,
        ['not exists'] = {
            settingGroups = {},
            expectedGroupId = 'general',
            expectedGroupLabel = 'General',
        },
    })
    :register()

-- @covers Settings.maybeCreateLibraryInstance()
TestCase.new()
    :setName('maybeCreateLibraryInstance')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local class = __:getClass('Settings')

        class.__ = Spy
            .new(class.__)
            :mockMethod('isConfigEnabled', function() return data.isConfigEnabled end)

        class.maybeCreateLibraryInstance()

        lu.assertEquals(data.shouldCreateSettingsInstance, class.__.settings ~= nil)
        lu.assertEquals(data.shouldCreateSettingsInstance, type(class.__.setting) == "function")

        -- asserts that the library method works as a proxy
        if data.shouldCreateSettingsInstance then
            class.__.settings = Spy
                .new(class.__.settings)
                :mockMethod('setting')

            class.__:setting('groupId.settingId')

            class.__.settings
                :getMethod('setting')
                :assertCalledOnceWith('groupId.settingId')
        end
    end)
    :setScenarios({
        ['config not enabled'] = {
            isConfigEnabled = false,
            shouldCreateSettingsInstance = false,
        },
        ['config enabled'] = {
            isConfigEnabled = true,
            shouldCreateSettingsInstance = true,
        },
    })
    :register()

TestCase.new()
    :setName('onLoad callback')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local library = StormwindLibrary.new({
            name = 'temporary-library-instance',
            data = data.table,
        })

        lu.assertEquals(data.shouldCreateSettingsInstance, library.settings ~= nil)
    end)
    :setScenarios({
        ['data has no value'] = {
            table = nil,
            shouldCreateSettingsInstance = false,
        },
        ['data has value'] = {
            table = 'TestTable',
            shouldCreateSettingsInstance = true,
        },
    })
    :register()

-- @covers Settings:setting()
TestCase.new()
    :setName('setting')
    :setTestClass(TestSettings)
    :setExecution(function(data)
        local instance = __:new('Settings')

        local settingGroupA = __:new('SettingGroup'):setId('group-a')
        local settingGroupG = __:new('SettingGroup'):setId('general')

        local setting1 = __:new('Setting'):setId('setting-1')
        local setting2 = __:new('Setting'):setId('setting-2')
        local setting3 = __:new('Setting'):setId('setting-3')

        settingGroupA:addSetting(setting1)
        settingGroupA:addSetting(setting2)
        settingGroupG:addSetting(setting3)

        instance:addSettingGroup(settingGroupA)
        instance:addSettingGroup(settingGroupG)

        local result = instance:setting(data.settingFullyQualifiedId)

        lu.assertEquals(data.expectedSettingId, result and result.id or nil)
    end)
    :setScenarios({
        ['empty id'] = {
            settingFullyQualifiedId = '',
            expectedSettingId = nil,
        },
        ['invalid id'] = {
            settingFullyQualifiedId = 'group-a.setting-1.something-else',
            expectedSettingId = nil,
        },
        ['full qualified id'] = {
            settingFullyQualifiedId = 'group-a.setting-1',
            expectedSettingId = 'setting-1',
        },
        ['general group'] = {
            settingFullyQualifiedId = 'setting-3',
            expectedSettingId = 'setting-3',
        },
        ['setting not found'] = {
            settingFullyQualifiedId = 'group-a.setting-4',
            expectedSettingId = nil,
        },
        ['general setting not found'] = {
            settingFullyQualifiedId = 'setting-4',
            expectedSettingId = nil,
        },
    })
    :register()
-- end of Settings